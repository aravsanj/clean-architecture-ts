import express from "express";

export class Server {
  public static async run(port: number): Promise<void> {
    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => res.send("Server is up"));

    app.listen(port, () => {
      console.log("Server is running!");
    });
  }
}
