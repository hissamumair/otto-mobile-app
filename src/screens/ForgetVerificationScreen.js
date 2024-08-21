import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/button'; // Make sure the path to your CustomButton component is correct
import Feather from 'react-native-vector-icons/Feather';

export default function ForgetVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '','']);
  const [seconds, setSeconds] = useState(30);

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
    setSeconds(10);
  };

  const handleVerifyCode = () => {
    // Logic to verify the OTP code
    console.log('OTP Code:', otp.join(''));
    navigation.navigate("ConfirmEmail"); // Navigate to ConfirmEmail screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Verify Your Number</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./../assets/images/OTPverification.png')} // Ensure the path is correct
          style={styles.image}
        />
      </View>
      <Text style={styles.verifyText}>Verification Code</Text>
      <Text style={styles.instructions}>
  Enter the verification code that we’ve
</Text>
<Text style={{marginLeft:90,top:-150}}> sent to</Text>
<Text style={{top:-170,marginLeft:150,color:"black"}}> +92356210012</Text>
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
  icon={
    <MaterialIcons
      name="arrow-forward-ios"
      size={20}
      color="#FFFFFF"
    />
  }
/>


      <View style={styles.resendContainer}>
        {seconds === 0 ? (
          // <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
          //   <MaterialIcons name="refresh" size={20} color="#000" />
          //   <Text style={styles.resendLink}>Resend Code</Text>
          // </TouchableOpacity>
          <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
          <Feather name="send" size={20}  style={styles.resendIcon} />
          <Text style={styles.resendLink}>Re-send Code in</Text>
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
    top:20,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color:"black",
    top:20,
    // textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100, // Adjust this to move the image up
    backgroundColor: 'transparent', // Ensure container background is transparent
  },
  image: {
    width: 180, 
    height:180, // Adjust width as needed
    height: undefined,
    aspectRatio: 1,
    borderRadius: 5, // Adjust aspect ratio as needed
  },
  verifyText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    top:-130,
    color:"black",
  },
  instructions: {
    fontSize: 16,
  //  color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    top:-130,
    marginLeft:-10,
   // color:"black",


  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    top:-150,

  },
  otpInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
    //top:-110,

  },
  continueButton: {
    marginTop: 20,
    top:-140,

  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    top:-130,

  },
  timerText: {
    fontSize: 16,
    color: '#666',
    //top:-110,

  },
  // resendButton: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#F0F0F0',
  //   paddingVertical: 10,
  //   paddingHorizontal: 15,
  //   borderRadius: 5,
  //   height: 50, // Set the desired height
  //   width: 150,  // Set the desired width
  // },
  // resendLink: {
  //   fontSize: 16,
  //   //color: '#0000FF',
  //   marginLeft: 5,
  // },

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
  },
  resendLink: {
    fontSize: 16,
    //color: '#000',
    marginLeft: 5,
  },
  resendIcon: {
    marginRight: 5,

  },
});
