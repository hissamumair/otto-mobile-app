import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../components/button';
import { Checkbox } from 'react-native-paper';

export default function SignupScreen1({ navigation }) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [phoneError, setPhoneError] = useState(""); // State for phone error
  const phoneInput = useRef(null);

  const handleContinue = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    if (checkValid) {
      navigation.navigate('SignupScreen2'); // Navigate to SignupScreen2
    } else {
      // Handle invalid phone number
      setPhoneError("Please enter a valid phone number");
    }
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
        <View style={styles.stepLineInactive} />
        <View style={styles.stepLineInactive} />
      </View>

      <View style={styles.inputContainer}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="PK" // Display +92 for Pakistan
          layout="first"
          onChangeText={text => setValue(text)}
          onChangeFormattedText={text => setFormattedValue(text)}
          withDarkTheme
          withShadow
          autoFocus
          renderDropdownIcon={() => (
            <Ionicons name="chevron-down" size={20} color="#000" />
          )}
          containerStyle={{width:"100%", height:50}}
          textInputStyle={{height:50}}
          textContainerStyle={{}}
          />

        {/* Display the error message and image below the input */}
        {phoneError ? (
          <View style={styles.errorContainer}>
            <Image
              source={require('./../assets/images/errro.png')}
              style={styles.errorImage}
            />
            <Text style={{color:"red"}}>{phoneError}</Text>
          </View>
        ) : null}

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(!isChecked)}
            color="#BD2949"
          />
          <Text style={styles.checkboxText}>
            By continuing, you confirm that you agree with our{" "}
            <Text style={styles.termsText}>terms and conditions</Text>.
          </Text>
        </View>

        <CustomButton
          title="Continue"
          onPress={handleContinue}
          style={styles.button}
          textStyle={styles.buttonText}
          icon={<Ionicons name="arrow-forward" size={20} color="#fff" />}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')} style={styles.signinLink}>
          <Text style={styles.signinText}>
            Already have an account? <Text style={styles.signinBoldText}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
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
    marginRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    top: 10,
  },
  stepLineActive: {
    height: 8,
    backgroundColor: '#BD2949',
    flex: 1,
    marginHorizontal: 5,
    borderRadius:20,

  },
  stepLineInactive: {
    height: 8,
    backgroundColor: '#D3D3D3',
    flex: 1,
    marginHorizontal: 5,
    borderRadius:20,

  },
  inputContainer: {
    marginBottom: 20,
  },
  phoneInputContainer: {
    width: '100%',
    // height: 50,
    // color:"red",
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  phoneInputTextContainer: {
    height: '100%',
    // height:60,
    backgroundColor: '#fff',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  errorImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    // Removed top:90 style to avoid pushing it off-screen
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxText: {
    marginLeft: 8,
    color: 'grey',
  },
  termsText: {
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#BD2949',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  footer: {
    marginTop: -10,
  },
  signinLink: {
    marginTop: 20,
  },
  signinText: {
    fontSize: 14,
    //color: 'black',
  },
  signinBoldText: {
    fontWeight: 'bold',
        color: 'black',

  },
});
