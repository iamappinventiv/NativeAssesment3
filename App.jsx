import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Header from './Screens/Header';
import {
  Heart,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
} from './Assets/SVGs';

const Data = [
  {
    id: '1',
    photo: <Image1 />,
    name: 'Nike',
    description: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    price: '$96',
    heart: <Heart />,
  },
  {
    id: '2',
    photo: <Image2 />,
    name: 'Converse',
    description: 'Run Star Hike Three Color Unisex',
    price: '$85.05',
    heart: <Heart />,
  },
  {
    id: '3',
    photo: <Image3 />,
    name: 'Nike',
    description: 'Air Jordan 1 Retro High Obsidian UNC ',
    price: '$196',
    heart: <Heart />,
  },
  {
    id: '4',
    photo: <Image4 />,
    name: 'Nike',
    description: 'Air Force 1 Shadow Beige Pale Ivory',
    price: '$115',
    heart: <Heart />,
  },
  {
    id: '5',
    photo: <Image5 />,
    name: 'New Balance',
    description: 'New Three Color Unisex',
    price: '$90',
    heart: <Heart />,
  },
  {
    id: '6',
    photo: <Image6 />,
    name: 'Asics',
    description: 'Asics Unisex',
    price: '$50.05',
    heart: <Heart />,
  },
  {
    id: '7',
    photo: <Image1 />,
    name: 'Nike',
    description: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    price: '$96',
    heart: <Heart />,
  },
  {
    id: '8',
    photo: <Image2 />,
    name: 'NIke',
    description: 'Air Force 1 Shadow Beige Pale Ivory',
    price: '$114',
    heart: <Heart />,
  },
  {
    id: '9',
    photo: <Image3 />,
    name: 'Asics',
    description: 'Asics Unisex',
    price: '$50.05',
    heart: <Heart />,
  },
  {
    id: '10',
    photo: <Image4 />,
    name: 'Converse',
    description: 'Run Star Hike Three Color Unisex',
    price: '$85.05',
    heart: <Heart />,
  },
];

const App = () => {
  const [data, setData] = useState(Data);

  const handleHeartPress = id => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? {...item, isHeartPressed: !item.isHeartPressed} : item,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sneakers" numProducts={25} />
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.shoeContainer}>
            <View style={styles.shoeContent}>
              <View style={styles.shoeImage}>{item.photo}</View>
              <TouchableOpacity onPress={() => handleHeartPress(item.id)}>
                <View style={styles.heart}>
                  {item.isHeartPressed ? (
                    <LottieView
                      source={require('./Assets/heart.json')}
                      autoPlay
                      loop={false}
                      style={styles.lottie}
                    />
                  ) : (
                    <Heart />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subheading}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    paddingLeft: 22,
  },
  shoeContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    marginLeft: 12,
    marginRight: 12,
  },
  shoeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  shoeImage: {
    paddingHorizontal: 15,
    paddingTop: 35,
  },
  lottie: {
    position: 'relative',
    width: 52,
    height: 48,
    left: 17,
    bottom: 16,
  },
  heart: {
    position: 'absolute',
    right: 18,
    top: 27,
    flexDirection: 'row',
    elevation: 1,
    zIndex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  subheading: {
    fontSize: 13,
    flexWrap: 'wrap',
    paddingTop: 7,
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 13,
    paddingTop: 7,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});

export default App;
