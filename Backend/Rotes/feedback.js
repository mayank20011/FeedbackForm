import { Router } from "express";
import {showClientByNo, addFeedback} from "../Controller/feedback.js";

const feedbackRouter = Router();

feedbackRouter.route("/")
.get(showClientByNo)
.patch(addFeedback);

export default feedbackRouter;