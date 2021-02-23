import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles.js';
import searchResults from '../../../assets/data/search';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import {useNavigation} from '@react-navigation/native';

const LocationScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{textInput: styles.textInput}}
        query={{
          key: 'AIzaSyDT1fRImsaCqIfMvg7YUBgi8jIsyhrcEOw',
          language: 'en',
          types: '(cities)',
        }}
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default LocationScreen;
