import express from "express";
import { CreateUserController } from "../presentation/controllers/CreateUserController";

// This is the actual server class.

// We are only really depended on express in this class. We should be able to switch from express if desired.

export class Server {
  public static async run(
    port: number,
    createUserController: CreateUserController
  ): Promise<void> {
    const app = express();
    app.use(express.json());

    // Simple endpoint to check server availability
    app.get("/", (req, res) => res.send("Server is up"));

    // Endpoint to create a new user
    app.post("/createUser", (req, res) =>
      createUserController.handle(req, res)
    );

    app.listen(port, () => {
      console.log(`Server is running in ${port}`);
    });
  }
}
