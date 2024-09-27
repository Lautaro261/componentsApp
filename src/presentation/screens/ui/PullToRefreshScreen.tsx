import React, {useContext, useState} from 'react';
import {Title} from '../../components/ui/Title';
import {RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../../config/theme/globalTheme';
import {ThemeContext} from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

  const onRefrech = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange']}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
          onRefresh={onRefrech}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
