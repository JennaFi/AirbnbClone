import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
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
  );
};

export default GuestsScreen;
