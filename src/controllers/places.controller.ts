import { Request, Response } from "express";

export const fetchPlaces = (request: Request, response: Response) => {
  response.status(200).json({ message: "places router works!!" });
};

export const fetchUserPlaces = (request: Request, response: Response) => {
  response.status(200).json({ message: "places router user works!!" });
};

export const fetchPlaceById = (request: Request, response: Response) => {
  response.status(200).json({
    message: `places router works for id = ${request.params.placeId}!!`,
  });
};
