import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 // Ensure the path is correct

export default function SuccessfulRecover({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Account Successfully Recovered!</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./../assets/images/accountrecover.png')} // Use the appropriate image path
          style={styles.image}
        />
      </View>

      <CustomButton
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')} 
        style={styles.nextButton}    
        // icon="arrow-forward-ios"      
        icon={
          <MaterialIcons
            name="arrow-forward-ios"

            size={20}
            color="#FFFFFF"
          />
        }
        />
              {/* <CustomButton
        title="Save"
        onPress={()=>console.log("hello")} 
        style={styles.nextButton} 
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    top:-140,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600', // Changed to '600' for semibold
    color: '#000',
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 327,
    height: 251,
    resizeMode: 'contain',
  },
  nextButton: {
    marginTop: 20,
    width: '100%', // Adjusted width to be larger (e.g., 80% of the container width)
    alignSelf: 'center', // Center-align the button horizontally
  },
});
