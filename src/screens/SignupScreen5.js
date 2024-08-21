import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/button'; // Ensure this path is correct

export default function SignupScreen5({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    // Navigate to SetProfile screen
    navigation.navigate('SignupScreen6');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.stepperContainer}>
        <View style={styles.stepLineActive} />
        <View style={styles.stepLineActive} />
        <View style={styles.stepLineInactive} />
      </View>
      <Image
        source={require('./../assets/images/setpassword.png')} // Replace with your image path
        style={styles.image}
      />

      <Text style={styles.boldSubtitle}>Set Your Password</Text>
      <Text style={styles.subtitle}>Set your password for login</Text>

      <View style={styles.inputContainer}>
        <PaperTextInput
          label="Enter Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={text => setPassword(text)}
          right={<PaperTextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
          left={<PaperTextInput.Icon icon="lock" />}
          style={styles.input}
          mode="outlined"
          theme={{ colors: { primary: 'grey', text: '#000' } }}
        />
        <Image
            source={require('./../assets/images/errro.png')} 
            style={{top:6,left:13}}
          />
          <Text style={{top:-11,left:35}}>error message</Text>
      </View>

      <View style={styles.inputContainer}>
        <PaperTextInput
          label="Confirm Password"
          mode="outlined"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          right={<PaperTextInput.Icon icon={confirmPasswordVisible ? "eye" : "eye-off"} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />}
          left={<PaperTextInput.Icon icon="lock" />}
          style={styles.input}
          theme={{ colors: { primary: 'grey', text: '#000' } }}
        />
        <Image
            source={require('./../assets/images/errro.png')} 
            style={{top:7,left:13}}
          />
          <Text style={{top:-12,left:35}}>error message</Text>
      </View>

      <CustomButton
        title="Save"
        onPress={handleSave} // Use onPress to handle navigation
        style={styles.saveButton} // Style for positioning
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 20,
    top: 20,
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    top:30,
  },
  stepLineActive: {
    height: 8,
    backgroundColor: '#BD2949', // Color for the active step
    flex: 1,
    marginHorizontal: 5,
    borderRadius:20,
  },
  stepLineInactive: {
    height: 8,
    backgroundColor: '#BD2949', // Color for the active step
    flex: 1,
    marginHorizontal: 5,
    borderRadius:20,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    top: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    alignSelf: 'center',
    top: 40,
  },
  boldSubtitle: {
    fontSize: 24,
    top: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 14,
    top: 25,
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333', // Darker grey color for the subtitle
  },
  inputContainer: {
    marginBottom: 15,
    top: 20,
  },
  input: {
    backgroundColor: '#fff',
  },
  saveButton: {
    top: 30, // Adjust position as needed
  },
});
