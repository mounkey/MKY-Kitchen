import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ListSupermarket = (onSelectedEnlarge, object) => {
  
  const [order, setorder] = useState(object);


  const onPressEnlarge = () => {
    onSelectedEnlarge(!selected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={order}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={onPressEnlarge}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export  default ListSupermarket;