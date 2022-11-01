import { FlatList, StyleSheet, Text, View } from "react-native";
import { MenuAlt, PhotoContainer } from "../../components";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../constants/colors";
import { LoadPhoto } from "../../store/action/photo.action";

const StoragePhoto = ({navigation}) =>{

    const dispatch = useDispatch();
    const photo = useSelector((state) => state.photos.photos)

    useEffect(() => {
        dispatch(LoadPhoto());
      }, [dispatch]);

    const renderItem = ({item}) => (<PhotoContainer item={item} image={item.image} />)

    return(
        <View style={styles.container}>
          <MenuAlt title = {'Galerias'} />
          <FlatList
            style={styles.container}
            data={photo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            />
        </View>
    )
} 


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color.primary,
    },
    
})


export default StoragePhoto;