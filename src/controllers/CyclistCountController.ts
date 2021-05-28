import { NextFunction, Request, Response, Router } from "express";
import config from "../config/config";
import { ApiResponseError } from "../resources/interfaces/ApiResponseError";
import CyclistCount from "../schemas/CyclistCount";
import { CyclistCountService } from "../services/cyclistCount.service";

const { errors } = config;
const cyclistCountRouter: Router = Router();

// /cyclistCount
cyclistCountRouter
  .route("/")
  .get(async (req: Request, res: Response, next: NextFunction) => {
    const cyclistCountService = new CyclistCountService(),
      { q } = req.query;
    try {
      let response;
      if (q) {
        response = await cyclistCountService.getFiltered(q);
      } else {
        response = await cyclistCountService.getAll();
      }
      res.status(200).json({
        success: true,
        data: response,
      });
    } catch (err) {
      const error: ApiResponseError = {
        code: 400,
        errorObj: err,
      };
      next(error);
    }
  });

cyclistCountRouter
  .route("/metadata/")
  .get(async (req: Request, res: Response, next: NextFunction) => {
    const cyclistCountService = new CyclistCountService();
    try {
      res.status(200).json({
        success: true,
        data: await cyclistCountService.getMetadata(),
      });
    } catch (err) {
      const error: ApiResponseError = {
        code: 400,
        errorObj: err,
      };
      next(error);
    }
  });

// /cyclistCount/:id
cyclistCountRouter
  .route("/:id")
  .get(async (req: Request, res: Response, next: NextFunction) => {
    const cyclistCountService = new CyclistCountService();
    try {
      const cyclistCount = await cyclistCountService.getById(req.params.id);

      if (!cyclistCount) {
        res.status(404).json({
          success: false,
          message: `${errors.entityNotFound}: cyclist count id`,
        });
      }
      // return found user
      res.status(200).json({
        success: true,
        cyclistCount: cyclistCount,
      });
    } catch (err) {
      const error: ApiResponseError = {
        code: 400,
        errorObj: err,
      };
      next(error);
    }
  });

export default cyclistCountRouter;
