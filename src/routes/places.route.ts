import express from "express";
import {
  fetchPlaceById,
  fetchPlaces,
  fetchUserPlaces,
} from "../controllers/places.controller";

const router = express.Router({ caseSensitive: false });

router.route("/user").get(fetchUserPlaces);

router.route("/:placeId").get(fetchPlaceById);

router.route("/").get(fetchPlaces);

export default router;
