import { fetchImages, insertImage } from "../db";

import Photo from "../model/photo";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos:[],
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhoto(state, action) {
      const newPhoto = new Photo(
        action.payload.id,
        action.payload.imageUri
      );
      state.photos.push(newPhoto);    
    },
    setPhotos(state, action) {
      state.photos = action.payload;
    },
  },
});

export const { addPhoto, setPhotos } = photoSlice.actions;

export const loadPhotos = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchImages();
      dispatch(setPhotos( dbResult?.rows?._array));
    } catch (err) {
      throw err;
    }
  };
}

export const takePhoto = (image) => {
  return async (dispatch) => {
    /*const data = await response.jason(); 
    if (!data.results) throw new Error("Something went wrong!");*/
    const address = data.results[0].formatted_address;
     // const fileName = image.split("/").pop();
    // const path = FileSystem.documentDirectory + fileName;
    try {
      // await FileSystem.moveAsync({
      //   from: image,
      //   to: path,
      // });
      const result = await addPhoto( mage);
      dispatch(insertImage({ id: result.insertId,  image }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};




