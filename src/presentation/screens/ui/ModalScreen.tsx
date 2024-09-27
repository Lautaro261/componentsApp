import React, {useContext, useState} from 'react';
import {Modal, Platform, StyleSheet, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';

export const ModalScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.cardBackground,
            },
          ]}>
          <View style={styles.containerText}>
            <Title text="Modal content" safe />
          </View>

          <View style={styles.viewSeparator} />

          <Button
            text="Cerrar modal"
            onPress={() => setIsVisible(false)}
            style={styles.button}
          />
        </View>
      </Modal>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    paddingHorizontal: 10,
  },
  viewSeparator: {
    flex: 1,
  },
  button: {
    height: Platform.OS === 'android' ? 40 : 60,
    borderRadius: 0,
  },
});
