import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './styles';

const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostScreen = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable onPress={goToPostScreen} style={styles.container}>
      <Image style={styles.image} source={{uri: post.image}} />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>${post.newPrice}</Text>/ night
      </Text>

      <Text style={styles.totalPrice}>${post.totalPrice}</Text>
    </Pressable>
  );
};

export default Post;
