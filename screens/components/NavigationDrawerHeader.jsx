// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon
          name="align-left"
          size={24}
          color="#43436A"
          style={styles.toggleButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButton: {width: 25, height: 25, marginLeft: 16},
  container: {flexDirection: 'row'},
});
export default NavigationDrawerHeader;
