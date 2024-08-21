import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../components/button'; // Ensure the path to CustomButton is correct

export default function SignupScreen2({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '','']);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResendCode = () => {
    // Logic to resend the code
    setSeconds(30);
  };

  const handleVerifyCode = () => {
    // Logic to verify the OTP code
    console.log('OTP Code:', otp.join(''));
    navigation.navigate('SignupScreen3'); // Navigate to ConfirmEmail screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign up</Text>
      </View>

      <View style={styles.stepperContainer}>
        <View style={styles.stepLineActive} />
        <View style={styles.stepLineInactive} />
        <View style={styles.stepLineInactive} />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./../assets/images/transparant.png')} // Ensure the path is correct
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.verifyText}>Verification Code</Text>
        <Text style={styles.instructions}>
          Enter the verification code that we’ve sent to +92356210012
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>

      <CustomButton
        title="Continue"
        onPress={handleVerifyCode}
        style={styles.continueButton}
        textStyle={styles.buttonText}
        icon={<Ionicons name="arrow-forward" size={20} color="#fff" />}

      />

      <View style={styles.resendContainer}>
        {seconds === 0 ? (
          <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
            <Feather name="send" size={20} color="#000" style={styles.resendIcon} />
            <Text style={styles.resendLink}>Resend Code in</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.timerText}>Resend Code in {seconds} seconds</Text>
        )}
      </View>
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
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    marginBottom:30,

    top:20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    //textAlign: 'center',
    color: '#000',
    //top:-30, // Darker text color
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stepLineActive: {
    height: 6,
    backgroundColor: '#BD2949', // Color for the active step
    flex: 1,
    marginHorizontal: 5,
    borderRadius:20,

  },
  stepLineInactive: {
    height: 6,
    backgroundColor: '#D3D3D3', // Color for the inactive steps
    flex: 1,
    marginHorizontal: 5,
    borderRadius:20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adjust this to move the image up
    backgroundColor: 'transparent',
  },
  image: {
    width: 180, // Adjust size as needed
    height: 180,
    aspectRatio: 1,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 20, // Adjusted margin to move text up
    marginBottom: 20, // Adjusted margin to move text up
  },
  verifyText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000', // Darker text color
  },
  instructions: {
    fontSize: 16,
    color: '#333', // Darker text color
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30, // Adjusted to move up
  },
  otpInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
  continueButton: {
    marginTop: 1,
    borderRadius:10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resendContainer: {
    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjusted margin to move up
  },
  timerText: {
    fontSize: 16,
    color: '#333', // Darker text color
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    height:40,
    width:330,
    borderRadius:10,

  },
  resendLink: {
    fontSize: 16,
    // color: '#000',
    marginLeft: 5,
  },
  resendIcon: {
    marginRight: 5,
    color:"grey",
  },
});
