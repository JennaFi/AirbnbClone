import {Auth} from 'aws-amplify';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

const ProfileScreen = () => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={logout}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#c3c3c3',
          marginTop: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
