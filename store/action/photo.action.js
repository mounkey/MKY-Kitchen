import { phototypes } from "../types";

const { ADD_PHOTO, SET_PHOTOS } = phototypes;

export const addPhoto = (photo) => {
  return {
    type: ADD_PHOTO,
    photo,
  };
}

export const setPhotos = (photos) => {
  return {
    type: SET_PHOTOS,
    photos,
  };
}
