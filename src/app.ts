import express from "express";
import cors from "cors";
import routes from "./routes";
import helmet from "helmet";
import morgan from "morgan";
import { Logger, ILogger } from "./utils";
import nodeErrorHandler from "./middlewares/nodeErrorHandler";
import config from "./config/config";
import notFoundError from "./middlewares/notFoundHandler";
import mongoose from "mongoose";
import genericErrorHandler from "./middlewares/genericErrorHandler";

export class Application {
  app: express.Application;
  logger: ILogger;
  config = config;

  constructor() {
    this.logger = new Logger(__filename);
    this.app = express();
    this.app.locals.name = this.config.name;
    this.app.locals.version = this.config.version;
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(
      morgan("dev", {
        skip: () => process.env.NODE_ENV === "test",
      })
    );
    this.app.disable("x-powered-by");
    this.app.use("/v1", routes);
    this.app.use(genericErrorHandler);
    this.app.use(notFoundError);
  }

  setupDbAndServer = async () => {
    try {
      const url = `mongodb://${this.config.db.username}:${this.config.db.password}@${this.config.db.host}:${this.config.db.port}/${this.config.db.database}?authSource=admin`;
      const conn = await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });
      if (process.env.NODE_ENV === "development") {
        mongoose.set("debug", true);
      }
      if (process.env.NODE_ENV !== "test") {
        this.logger.info(
          `Connected to database. Connection: ${conn.connection.host} / ${conn.connection.name}`
        );
      }
      await this.startServer();
    } catch (e) {
      this.logger.error(`Database error: ${e}`);
    }
  };

  startServer(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.app
        .listen(+this.config.port, this.config.host, () => {
          if (process.env.NODE_ENV !== "test") {
            this.logger.info(
              `Server started at http://${this.config.host}:${this.config.port}`
            );
          }

          resolve(true);
        })
        .on("error", nodeErrorHandler);
    });
  }
}
