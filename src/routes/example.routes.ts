import { Router } from "express";
import * as exampleController from "../controllers/example.controller";

const exampleRouter = Router();
exampleRouter.get("/", exampleController.hello);

export default exampleRouter;
