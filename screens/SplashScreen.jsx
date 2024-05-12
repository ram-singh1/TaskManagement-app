import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';

import Profile from '../images/profile.jpg';

const SplashScreen = ({navigation}) => {
  // State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      // Check your authentication logic here
      // For example, assuming isAuthenticated is a state variable indicating whether the user is authenticated
      const isAuthenticated = true;

      // If user is authenticated, navigate to DrawerNavigationRoutes
      // Otherwise, navigate to Auth
      navigation.replace(isAuthenticated ? 'DrawerNavigationRoutes' : 'Auth');
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.ImageStyle}>Brand Logo</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F9FF',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  ImageStyle: {color: 'blue', fontSize: 35, fontWeight: '600'},
});
