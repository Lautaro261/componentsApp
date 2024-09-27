/* eslint-disable react/no-unstable-nested-components */
import React, {useContext, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
//import { Title } from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';
import {FadeInImage} from '../../components/ui/FadeInImage';
//import { colors } from '../../../config/theme/globalTheme';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomView} from '../../components/ui/CustomView';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from(
      {length: 5},
      (_, index) => numbers.length + index,
    );

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <CustomView>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => <LoaderIndicator />}
      />
    </CustomView>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={styles.image}
    />
    /*         <Image
        source={{uri: `https://picsum.photos/id/${number}/500/400`}}
        style={styles.image}
        /> */
  );
};

const LoaderIndicator = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={40} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  /*   flatListText: {
    height: 300,
    backgroundColor: colors.primary,
    color: 'white',
    fontSize: 50,
  }, */
  image: {
    height: 400,
    width: '100%',
  },
  loaderContainer: {
    height: 150,
    justifyContent: 'center',
  },
});
