import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={item.photo} />
      <View style={styles.cardContent}>
        <Text style={styles.brand}>{item.description}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  brand: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: '#777',
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default Card;
