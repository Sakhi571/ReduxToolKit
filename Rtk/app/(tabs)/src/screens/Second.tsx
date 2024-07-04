import { View, Text, FlatList, StyleSheet,TouchableOpacity,Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCardItem } from '../slice/Slice';

const Second = () => {
  const dispatch = useDispatch();
  const {height} = useWindowDimensions();
  const items= useSelector(state => state.cart);
  const remove=(item)=>{
    dispatch(removeCardItem(item))
  }
  return (
    <View>
        <View>
        <FlatList style={styles.flat}
          data={items}
          contentContainerStyle={height}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity style={styles.button} onPress={()=> remove(item)}>
                  <Text style={styles.buttonText}>Remove Item</Text>
                </TouchableOpacity>
              </View>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
        />
        </View>
    </View>
  )
}

export default Second

const styles = StyleSheet.create({

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 20,
    },
    text: {
      fontSize: 28,
      color: "blue"
    },
   
    itemContainer: {
      flexDirection: 'row',
      backgroundColor: 'darkwhite',
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginVertical: 5,
      alignItems: 'center',
    },
    itemDetails: {
      flex: 1,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    price: {
      fontWeight: '500',
      fontSize: 16,
      color: 'gray',
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    image: {
      width: 50,
      height: 50,
      marginLeft: 10,
    },
    flat:{
      marginBottom:2
    }
  });
  