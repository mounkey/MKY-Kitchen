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

export const fetchPhotos = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchImages();
      dispatch({ type: SET_PHOTOS, photos: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};

export const savePlace = (image) => {
  return async (dispatch) => {
    const response = await fetch(image);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.jason();
    if(!data.result){
      throw new Error("Something went wrong!");
    }
    //const fileName = data.result.split("/").pop();
    //const newPath = FileSystem.documentDirectory + fileName;
    try {
      //await FileSystem.moveAsync({
        //from: image,
        //to: newPath,
      //});
      const dbResult = await insertImage(id, image);
      dispatch(ADD_PHOTO({ id: dbResult.insertId, imagen }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};


export default photoReducer;