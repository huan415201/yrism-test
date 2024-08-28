import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationProps } from '../../navigator';
import { SCREEN_KEY } from '../../utils';
import { styles } from './styles';

const HomeScreen = ({ navigation }: { navigation: NavigationProps }) => {
  const goToList = () => navigation.navigate(SCREEN_KEY.EmployeeListScreen);

  const goToListWebView = () =>
    navigation.navigate(SCREEN_KEY.EmployeeListWebViewScreen);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToListWebView} style={styles.button}>
        <Text style={styles.buttonText}>Go to list (Webview)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={goToList}
        style={[styles.button, styles.buttonSpacing]}>
        <Text style={styles.buttonText}>Go to list</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
