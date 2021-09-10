import React from 'react';
import {Image, ScrollView, StyleSheet, Dimensions, View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log('movie: ', movie);

  return (
    <ScrollView style={styles.imageContainer}>
        <View style={styles.imageContainer}>
            <Image source={{uri}} style={styles.posterImage} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.subtitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
    paddingBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.75,
  },
  textContainer: {
      marginHorizontal: 20,
      marginTop: 20,
  },
  subtitle: {
      fontSize: 16,
      opacity: .8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
