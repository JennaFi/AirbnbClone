import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/pic.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('Destination Search')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore button')}>
          <Text style={styles.buttonText}>Explore nearby</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
