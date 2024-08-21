import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/button'; // Assuming the path is correct
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';

export default function ForgetScreen({ navigation }) {
  const [contactInfo, setContactInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [password, setPassword] = useState(''); // State for password

  const handleSendCode = () => {
    if (!contactInfo) {
      setErrorMessage('Contact info is required');
    } else {
      setErrorMessage('');
      // Navigate to ForgetVerificationScreen
      navigation.navigate('ForgetVerificationScreen');
    }
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Forget Password</Text>
      </View>
      <Text style={styles.instructions}>Enter your contact info</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email or phne number"
          placeholder="Enter your contact info"
          placeholderTextColor="#666"
          value={contactInfo}
          onChangeText={setContactInfo}
          left={<TextInput.Icon icon="email-outline" />}
        
          theme={{
            colors: {
              primary: '#000', // Border color
              background: '#fff', // Background color
            },
            roundness: 10, // Border radius
          }}
        />
        <Image
            source={require('./../assets/images/errro.png')} 
            style={{top:13,left:13}}
          />
          <Text style={{top:-5,left:35}}>error message</Text>
      </View>
      
      <CustomButton title="Send Code" onPress={handleSendCode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginRight: 0,
    left:-16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color:"black",
  },
  instructions: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 30,
    top:20,
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
  },
  input: {
    fontSize: 14,
    color: '#333',
    width: '100%', 
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
  },
});
