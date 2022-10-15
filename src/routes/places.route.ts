import express from "express";

const router = express.Router({ caseSensitive: false });

router
  .route("/")
  .get((req, res) =>
    res.status(200).json({ message: "places router works!!" })
  );

export default router;
