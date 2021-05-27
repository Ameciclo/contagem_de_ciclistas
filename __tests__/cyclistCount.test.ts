import { Application } from "../src/app";
import express from "express";
import supertest from "supertest";
import CyclistCount from "../src/schemas/CyclistCount";
import mongoose from "mongoose";
import * as cyclistCountMock from "./fixtures/cyclistProfile.json";

let application: Application;
export let app: express.Application;

describe("GET /v1/cyclist-count", () => {
  beforeAll(async (done) => {
    application = new Application();
    try {
      await application.setupDbAndServer();
    } catch (e) {
      console.error(e);
    }
    app = application.app;
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });

  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });

  it("should GET /v1/cyclist-count route and return 200", async (done) => {
    let cyclistCount = await CyclistCount.create(cyclistCountMock);
    cyclistCount = cyclistCount.toJSON();
    cyclistCount._id = cyclistCount._id.toString();

    await supertest(app)
      .get("/v1/cyclist-count/")
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body.data)).toBeTruthy();
        expect(res.body.data[0]._id).toMatch(cyclistCount._id);
      });
    done();
  });

  it("should GET /v1/cyclist-count/:id and return 200", async (done) => {
    let cyclistCount = await CyclistCount.create(cyclistCountMock);
    cyclistCount = cyclistCount.toJSON();
    cyclistCount._id = cyclistCount._id.toString();

    await supertest(app)
      .get(`/v1/cyclist-count/${cyclistCount._id}`)
      .expect(200)
      .then((res) => {
        expect(res.body.cyclistCount._id).toMatch(cyclistCount._id);
      });
    done();
  });
});
