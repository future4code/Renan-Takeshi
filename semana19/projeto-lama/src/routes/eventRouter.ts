import express from "express";
import { EventController } from "../controller/EventController";

export const eventRouter = express.Router();

const eventController = new EventController();

eventRouter.post("/create", eventController.createEvent);
eventRouter.get("/:weekday", eventController.getEventsByWeekday);
