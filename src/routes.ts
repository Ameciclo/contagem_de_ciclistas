import { Router } from "express";
import CyclistCountController from "./controllers/CyclistCountController";

const router: Router = Router();

router.use("/cyclist-count", CyclistCountController);

export default router;
