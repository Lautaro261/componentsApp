/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
//import { CustomView } from '../../components/ui/CustomView';
//import { Title } from '../../components/ui/Title';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/globalTheme';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore = ()=>{
        const newArray = Array.from({length: 5}, (_, index) =>numbers.length + index);

        setTimeout(()=>{
            setNumbers([... numbers, ...newArray]);
        }, 3000);
    };

  return (
    <View style={styles.container} >


        <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item)=>item.toString()}
        renderItem={({item})=><ListItem number={item}/>}
        ListFooterComponent={()=> <LoaderIndicator/>}
        />
    </View>
  );
};

interface ListItemProps{
    number: number;
}

const ListItem = ({number}:ListItemProps)=>{

    return(

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

const LoaderIndicator = () =>{
    return(
        <View style={styles.loaderContainer}>
            <ActivityIndicator size={40} color={colors.primary}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
    backgroundColor:'black',
    },
  flatListText: {
    height: 300,
    backgroundColor: colors.primary,
    color: 'white',
    fontSize: 50,
  },
  image:{
    height: 400,
    width:'100%',

  },
  loaderContainer:{
    height: 150,
    justifyContent: 'center',
  },
});
