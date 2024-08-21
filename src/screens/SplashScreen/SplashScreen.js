import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to WelcomeScreen after 3 seconds (adjust the delay as needed)
    const timer = setTimeout(() => {
      navigation.navigate('WellcomeScreen');
    }, 4000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BD2949',
  },
  image: {
    width: '50%',
    height: '50%',
    marginBottom: 20,
  },
});
