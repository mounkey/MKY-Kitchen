import { fetchImages, insertImage } from "../../db";

import { photo } from "../data";
import { phototypes } from "../types";

const { ADD_PHOTO, SET_PHOTOS } = phototypes;

const initialState ={
  photos: [],
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      const newPhoto = {
        id: action.photo.id,
        imageUri: action.photo.imageUri,
      };
      return {
        ...state,
        photos: state.photos.concat(newPhoto),
      };
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
      };
    default:
     return state;
  }
}

export default photoReducer;