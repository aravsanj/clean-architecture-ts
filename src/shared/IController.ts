import { Request, Response } from "express";

export interface IController {
  handle(request: Request, response: Response): Promise<void>;
}
