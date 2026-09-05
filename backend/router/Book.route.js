import express from "express"

import { getbook } from "../controller/Book.controller.js"

const Router = express.Router();

Router.get("/", getbook);

export default Router;