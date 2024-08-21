import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/button';
import {TextInput} from 'react-native-paper';
// import Google from '../assets/images/google.svg';

export default function SigninScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleSignIn = () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Handle sign in
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Sign in</Text>
        </View>

        <Text style={styles.welcomeBackText}>Welcome back!</Text>
        <Text style={styles.subHeaderText}>
          Please sign in to back up your progress
        </Text>

        <View style={styles.formContainer}>
          <Image
            source={require('./../assets/images/errro.png')}
            style={{top: 109, left: 13}}
          />
          <Text style={{top: 92, left: 35}}>error message</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Enter your email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon="email-outline" />}
            theme={{
              colors: {
                primary: '#000', // Customize the border color
                background: '#fff', // Background color
              },
              roundness: 7, // Set border radius here
            }}
          />
          <Image
            source={require('./../assets/images/errro.png')}
            style={{top: 109, left: 13}}
          />
          <Text style={{top: 92, left: 35}}>error message</Text>
          {emailError ? (
            <Text style={styles.errorText}>
              <AntDesign name="exclamationcircleo" size={14} color="red" />{' '}
              {emailError}
            </Text>
          ) : null}

          <TextInput
            style={styles.input}
            mode="outlined"
            label="Enter your password"
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
            right={
              <TextInput.Icon
                name={hidePassword ? 'eye-off' : 'eye'}
                onPress={togglePasswordVisibility}
              />
            }
            theme={{
              colors: {
                primary: '#000', // Customize the border color
                background: '#fff', // Background color
              },
              roundness: 7, // Set border radius here
            }}
          />
          {passwordError ? (
            <Text style={styles.errorText}>
              <AntDesign name="exclamationcircleo" size={14} color="red" />{' '}
              {passwordError}
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetScreen')}
            style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton
            title="Continue"
            onPress={handleSignIn}
            style={styles.customButtonStyle}
            icon={
              <MaterialIcons
                name="arrow-forward"

                size={20}
                color="#FFFFFF"
              />
            }
          />
        </View>

        <View style={styles.socialContainer}>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.socialText}>or continue with</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('./../assets/images/goo.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('./../assets/images/appleeee.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('./../assets/images/fbbb.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <TouchableOpacity
          onPress={() => navigation.navigate('SignupScreen1')}
          style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupScreen1')}
          style={styles.signupContainer}>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupTextBold}>Sign Up</Text>
          </Text>

          {/* <Google width={100} height={100} /> */}
          </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  welcomeBackText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 25,
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    top: -20,
  },
  formContainer: {
    flex: 1,
    top: -30,
  },
  input: {
    marginBottom: 15,
    //padding: 5,
    borderRadius: 24,
  },
  errorText: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 35,
    alignItems: 'center',
  },
  errorImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 105,
    left: 6,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 60,
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    top: 20,
  },
  customButtonStyle: {
    marginBottom: 20,
    borderRadius: 10,
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  socialText: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 10,
  },
  iconButton: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: {width: 18, height: 12},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 0,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  signupContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#696969',
  },
  signupTextBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});

// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import CustomButton from '../components/button';
// import { TextInput } from 'react-native-paper';

// export default function SigninScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [hidePassword, setHidePassword] = useState(true);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const togglePasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };

//   const handleSignIn = () => {
//     let valid = true;

//     if (!email) {
//       setEmailError('Email is required');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError('Password is required');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (valid) {
//       // Handle sign in
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.header}>
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             style={styles.backButton}>
//             <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>Sign in</Text>
//         </View>

//         <Text style={styles.welcomeBackText}>Welcome back!</Text>
//         <Text style={styles.subHeaderText}>
//           Please sign in to back up your progress
//         </Text>

//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             mode="outlined"
//             label="Enter your email"
//             placeholderTextColor="#666"
//             value={email}
//             onChangeText={setEmail}
//             left={<TextInput.Icon icon="email-outline" />}
//             theme={{
//               colors: {
//                 primary: '#000',
//                 background: '#fff',
//               },
//               roundness: 7,
//             }}
//           />
//           {emailError ? (
//             <Text style={styles.errorText}>
//               {emailError}
//             </Text>
//           ) : null}

//           <TextInput
//             style={styles.input}
//             mode="outlined"
//             label="Enter your password"
//             placeholderTextColor="#666"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={hidePassword}
//             right={
//               <TextInput.Icon
//                 name={hidePassword ? 'eye-off' : 'eye'}
//                 onPress={togglePasswordVisibility}
//               />
//             }
//             theme={{
//               colors: {
//                 primary: '#000',
//                 background: '#fff',
//               },
//               roundness: 7,
//             }}
//           />
//           {passwordError ? (
//             <Text style={styles.errorText}>
//               {passwordError}
//             </Text>
//           ) : null}

//           <TouchableOpacity
//             onPress={() => navigation.navigate('ForgetScreen')}
//             style={styles.forgotPassword}>
//             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//           </TouchableOpacity>

//           <CustomButton
//             title="Continue"
//             onPress={handleSignIn}
//             style={styles.customButtonStyle}
//             icon={
//               <MaterialIcons
//                 name="arrow-forward"
//                 size={20}
//                 color="#FFFFFF"
//               />
//             }
//           />
//         </View>

//         <View style={styles.socialContainer}>
//           <View style={styles.lineContainer}>
//             <View style={styles.line} />
//             <Text style={styles.socialText}>or continue with</Text>
//             <View style={styles.line} />
//           </View>
//           <View style={styles.socialIcons}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Image
//                 source={require('./../assets/images/google.png')}
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Image
//                 source={require('./../assets/images/apple.png')}
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Image
//                 source={require('./../assets/images/fb.png')}
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity
//           onPress={() => navigation.navigate('SignupScreen1')}
//           style={styles.signupContainer}>
//           <Text style={styles.signupText}>
//             Don't have an account?{' '}
//             <Text style={styles.signupTextBold}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   welcomeBackText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//     marginTop: 25,
//     marginBottom: 20,
//   },
//   subHeaderText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     top: -20,
//   },
//   formContainer: {
//     flex: 1,
//     top: -30,
//   },
//   input: {
//     marginBottom: 15,
//     borderRadius: 24,
//   },
//   errorText: {
//     fontSize: 14,
//     marginBottom: 10,
//     marginLeft: 35,
//     color: 'red',
//   },
//   forgotPassword: {
//     alignItems: 'flex-end',
//     marginBottom: 60,
//   },
//   forgotPasswordText: {
//     color: 'black',
//     fontSize: 14,
//     fontWeight: 'bold',
//     top: 20,
//   },
//   customButtonStyle: {
//     marginBottom: 20,
//     borderRadius: 10,
//   },
//   socialContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   lineContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ccc',
//   },
//   socialText: {
//     fontSize: 16,
//     color: '#666',
//     marginHorizontal: 10,
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//     marginVertical: 10,
//   },
//   iconButton: {
//     padding: 10,
//     borderRadius: 12,
//     backgroundColor: '#F5F5F5',
//     shadowColor: '#000',
//     shadowOffset: { width: 18, height: 12 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//   },
//   iconImage: {
//     width: 24,
//     height: 24,
//   },
//   signupContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   signupTextBold: {
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });












// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import CustomButton from '../components/button';
// import { TextInput } from 'react-native-paper';

// export default function SigninScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [hidePassword, setHidePassword] = useState(true);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const togglePasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };

//   const handleSignIn = () => {
//     let valid = true;

//     if (!email) {
//       setEmailError('Email is required');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError('Password is required');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (valid) {
//       // Handle sign in logic
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.header}>
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             style={styles.backButton}>
//             <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>Sign in</Text>
//         </View>

//         <Text style={styles.welcomeBackText}>Welcome back!</Text>
//         <Text style={styles.subHeaderText}>
//           Please sign in to back up your progress
//         </Text>

//         <View style={styles.formContainer}>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               mode="outlined"
//               label="Enter your email"
//               placeholderTextColor="#666"
//               value={email}
//               onChangeText={setEmail}
//               left={<TextInput.Icon icon="email-outline" />}
//               theme={{
//                 colors: {
//                   primary: '#000', // Customize the border color
//                   background: '#fff', // Background color
//                 },
//                 roundness: 7, // Set border radius here
//               }}
//             />
//             {emailError ? (
//               <View style={styles.errorContainer}>
//                 <AntDesign name="exclamationcircleo" size={14} color="red" />
//                 <Text style={styles.errorText}>{emailError}</Text>
//               </View>
//             ) : null}
//           </View>

//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               mode="outlined"
//               label="Enter your password"
//               placeholderTextColor="#666"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={hidePassword}
//               right={
//                 <TextInput.Icon
//                   name={hidePassword ? 'eye-off' : 'eye'}
//                   onPress={togglePasswordVisibility}
//                 />
//               }
//               theme={{
//                 colors: {
//                   primary: '#000', // Customize the border color
//                   background: '#fff', // Background color
//                 },
//                 roundness: 7, // Set border radius here
//               }}
//             />
//             {passwordError ? (
//               <View style={styles.errorContainer}>
//                 <AntDesign name="exclamationcircleo" size={14} color="red" />
//                 <Text style={styles.errorText}>{passwordError}</Text>
//               </View>
//             ) : null}
//           </View>

//           <TouchableOpacity
//             onPress={() => navigation.navigate('ForgetScreen')}
//             style={styles.forgotPassword}>
//             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//           </TouchableOpacity>

//           <CustomButton
//             title="Continue"
//             onPress={handleSignIn}
//             style={styles.customButtonStyle}
//             icon={
//               <MaterialIcons
//                 name="arrow-forward-ios"
//                 size={20}
//                 color="#FFFFFF"
//               />
//             }
//           />
//         </View>

//         <View style={styles.socialContainer}>
//           <View style={styles.lineContainer}>
//             <View style={styles.line} />
//             <Text style={styles.socialText}>or continue with</Text>
//             <View style={styles.line} />
//           </View>
//           <View style={styles.socialIcons}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Image
//                 source={require('./../assets/images/goo.png')}
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Image
//                 source={require('./../assets/images/appleeee.png')}
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Image
//                 source={require('./../assets/images/fbbb.png')}
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity
//           onPress={() => navigation.navigate('SignupScreen1')}
//           style={styles.signupContainer}>
//           <Text style={styles.signupText}>
//             Don't have an account?{' '}
//             <Text style={styles.signupTextBold}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   welcomeBackText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//     marginTop: 25,
//     marginBottom: 20,
//   },
//   subHeaderText: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     top: -20,
//   },
//   formContainer: {
//     flex: 1,
//     top: -30,
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   input: {
//     borderRadius: 24,
//   },
//   errorContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//     marginLeft: 5,
//   },
//   errorText: {
//     fontSize: 14,
//     color: 'red',
//     marginLeft: 5,
//   },
//   forgotPassword: {
//     alignItems: 'flex-end',
//     marginBottom: 60,
//   },
//   forgotPasswordText: {
//     color: 'black',
//     fontSize: 14,
//     fontWeight: 'bold',
//     top: 20,
//   },
//   customButtonStyle: {
//     marginBottom: 20,
//     borderRadius: 10,
//   },
//   socialContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   lineContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ccc',
//   },
//   socialText: {
//     fontSize: 16,
//     color: '#666',
//     marginHorizontal: 10,
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//     marginVertical: 10,
//   },
//   iconButton: {
//     padding: 10,
//     borderRadius: 50,
//     backgroundColor: '#F5F5F5',
//   },
//   iconImage: {
//     width: 25,
//     height: 25,
//   },
//   signupContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: 'black',
//   },
//   signupTextBold: {
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });
