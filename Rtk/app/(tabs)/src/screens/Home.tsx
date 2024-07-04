import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { users } from '../index/Index';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../slice/Slice';

const Home = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
   const add=(item)=>{
    dispatch(addCartItem(item))
   }
  return (
    <View >
      <View style={styles.row}>
        <Text style={styles.text}>Redux Toolkit</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Second')}>
          <Ionicons name="gift-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList style={styles.flat}
          data={users}
          contentContainerStyle={height}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity style={styles.button} onPress={()=> add(item)}>
                  <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
              </View>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
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
  iconContainer: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
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
    marginBottom:200
  }
});

export default Home;
