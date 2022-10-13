import { Button, CardListView, MenuAlt } from "../../components";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../constants/colors";
import React from "react";
import { selectList } from "../../store/action";

const List = ({navigation, route}) => {
  
  const dispatch = useDispatch();
  const list = useSelector(state => state.lists.lists);

  console.warn(list);
  

  const agregarList = () => {
    navigation.navigate('PutList');
  };

  const onSelected = (item ) => {
    dispatch(selectList(item.id));
    navigation.navigate('viewList');
  }

  const deletelist = (item) => {
    dispatch(deleteList(item.id));
  }
  
  const renderItem = ({item}) => <CardListView item={item} onSelected={onSelected} deletelist= {deletelist} />

  return (
    <View style={styles.container}>
      <MenuAlt title={'Lista Super'} />
      <Button onPress= { () => agregarList} title = {'Agregar una lista'} bkcolor = { Color.primary} color= {Color.letter} />
      <FlatList
        data = {list}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
      />

    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,     
    fontFamily: 'Lato-Regular',
  },
});
