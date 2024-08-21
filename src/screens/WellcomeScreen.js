import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/images/home.png')}
        style={styles.image}
        resizeMode="cover" // Change to cover to avoid white background
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SigninScreen')}
        >
          <Image 
            source={require('./../assets/images/user.png')} // Replace with your user image
            style={styles.icon}
            resizeMode="cover"
          />
          <Text style={styles.buttonText}>Login As Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Image 
            source={require('./../assets/images/setting.png')} // Replace with your settings image
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Login As Service Provider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: Dimensions.get('window').width, // Full screen width
    height: Dimensions.get('window').height, // Full screen height
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    width: '100%', // Full width
  },
  button: {
    backgroundColor: '#4A4A4A', // Darker grey background color
    padding: 15,
    borderRadius: 9,
    margin: 3,
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    justifyContent: 'center',
    shadowColor: '#FFFFFF', // White shadow color
    shadowOffset: { width: 0, height: 0 }, // Centered shadow
    shadowOpacity: 55, // Slightly higher shadow opacity for better visibility
    shadowRadius: 30, // Slightly smaller blur radius for a subtle effect
    elevation: 0, // Low elevation for a subtle shadow on Android
  },
  
  
  icon: {
    width: 25,
    height: 25,
  },
  buttonText: {
    color: '#FFFFF0', // White text color
    fontSize: 16,
    marginLeft: 10,
    fontWeight:"semibold",
   fontFamily:"Inter_18pt-Regular",
  },
});
