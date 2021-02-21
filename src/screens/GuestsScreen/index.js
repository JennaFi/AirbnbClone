import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        {/* row 1: Adults */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          {/* Buttons */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text styles={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            {/* + */}
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text styles={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* row 2: Children */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>
          {/* Buttons */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text styles={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            {/* + */}
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text styles={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* row 3: Infants */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          {/* Buttons */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text styles={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            {/* + */}
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text styles={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('SearchResults', {
              screen: 'Explore',
              params: {screen: 'SearchResultsScreen'},
            })
          }
          style={{
            marginBottom: 20,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
