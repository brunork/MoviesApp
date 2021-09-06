import React from 'react';
import {View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="black" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={styles.mainCarouselContainer}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.5}
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainCarouselContainer: {
    height: 440,
  },
  popularMoviesContainer: {
    height: 260,
  },
  popularMoviesTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
