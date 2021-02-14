import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7a5ef13e-f11e-11e5-a94a-714af11483cb.jpg?crop=2222%2C1250%2C0%2C116&resize=1180',
        }}
      />
      <Text style={styles.bedrooms}>4 beds in 2 bedrooms</Text>
      <Text style={styles.description}>
        Gorgeous house with 2 bedrooms with seaview
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$156</Text>
        <Text style={styles.price}>$140</Text>/ night
      </Text>

      <Text style={styles.totalPrice}>340 total</Text>
    </View>
  );
};

export default Post;
