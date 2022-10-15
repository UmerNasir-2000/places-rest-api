import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import config from "config";
import placesRouter from "./routes/places.route";

(async function main() {
  const app: Application = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/places", placesRouter);

  const PORT = config.get("port");

  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}/`)
  );
})();
