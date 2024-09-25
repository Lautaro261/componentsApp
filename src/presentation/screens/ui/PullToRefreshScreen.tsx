import React, { useState } from 'react';
import { Title } from '../../components/ui/Title';
import { RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/globalTheme';

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();

    const onRefrech = ()=>{
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 3000);
    };



  return (
    <ScrollView
    refreshControl={
       <RefreshControl
       refreshing = {isRefreshing}
       progressViewOffset={top}
       colors={[colors.primary, 'red', 'orange']}
       onRefresh={onRefrech}
       />}
    style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >



        <Title text="Pull to refresh" safe/>
    </ScrollView>
  );
};

