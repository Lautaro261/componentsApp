/* eslint-disable curly */
// Assets: https://undraw.co/illustrations
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  useWindowDimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/globalTheme';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text>SlidesScreen</Text>

      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        //scrollEnabled={false}
        onScroll={event => onScroll(event)}
      />

      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="Finalizar"
          style={styles.button}
          onPress={() => navigation.goBack()}
        />
      ) : (
        <Button
          text="Siguiente"
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
          style={styles.button}
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  const {title, desc, img} = item;

  return (
    <View style={[styles.slideItem, {width: width}]}>
      <Image
        source={img}
        style={[
          styles.itemImage,
          {
            width: width * 0.7,
            height: width * 0.7,
          },
        ]}
      />

      <Text style={[globalStyles.title, styles.itemText]}>{title}</Text>

      <Text style={styles.itemDesc}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    width: 100,
  },
  slideItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  itemImage: {
    resizeMode: 'center',
    alignSelf: 'center',
  },
  itemText: {
    color: colors.primary,
  },
  itemDesc: {
    color: colors.text,
    marginTop: 20,
  },
});
