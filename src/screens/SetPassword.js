// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { TextInput as PaperTextInput } from 'react-native-paper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import CustomButton from '../components/button'; // Ensure this path is correct

// export default function SetPassword({ navigation }) {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSave = () => {
//     // Navigate to SetProfile screen
//     navigation.navigate('SetProfile');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="chevron-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Set Your Password</Text>
//       </View>

//       <Image
//         source={require('./../assets/images/setpassword.png')} // Replace with your image path
//         style={styles.image}
//       />

//       <Text style={styles.boldSubtitle}>Set Your Password</Text>
//       <Text style={styles.subtitle}>Set your password for login</Text>

//       <View style={styles.inputContainer}>
//         <PaperTextInput
//           label="Enter your password"
//           secureTextEntry={!passwordVisible}
//           value={password}
//           onChangeText={text => setPassword(text)}
//           right={<PaperTextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
//           left={<PaperTextInput.Icon icon="lock-outline" />}
//           style={styles.input}
//           mode="outlined"
//           theme={{ colors: { primary: 'black', text: '#000' } }}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <PaperTextInput
//           label="Confirm your Password"
//           mode="outlined"
//           secureTextEntry={!confirmPasswordVisible}
//           value={confirmPassword}
//           onChangeText={text => setConfirmPassword(text)}
//           right={<PaperTextInput.Icon icon={confirmPasswordVisible ? "eye" : "eye-off"} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />}
//           left={<PaperTextInput.Icon icon="lock-outline" />}
//           style={styles.input}
//           theme={{ colors: { primary: 'black', text: '#000' } }}
//         />
//       </View>

//       <CustomButton
//         title="Save"
//         onPress={handleSave} // Use onPress to handle navigation
//         style={styles.saveButton} // Style for positioning
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backButton: {
//     marginRight: 20,
//     top: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     top: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     marginBottom: 20,
//     alignSelf: 'center',
//     top: 80,
//   },
//   boldSubtitle: {
//     fontSize: 24,
//     top: 60,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#000',
//     alignSelf: 'center',
//   },
//   subtitle: {
//     fontSize: 14,
//     top: 55,
//     alignSelf: 'center',
//     marginBottom: 20,
//     color: '#333', // Darker grey color for the subtitle
//   },
//   inputContainer: {
//     marginBottom: 15,
//     top: 60,
//   },
//   input: {
//     backgroundColor: '#fff',
//   },
//   saveButton: {
//     top: 80, // Adjust position as needed
//   },
// });








import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SetPassword({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    navigation.navigate('SetProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Set Your Password</Text>
      </View>

      <Image
        source={require('./../assets/images/setpassword.png')} 
        style={styles.image}
      />

      <Text style={styles.boldSubtitle}>Set Your Password</Text>
      <Text style={styles.subtitle}>Set your password for login</Text>

      <View style={styles.inputContainer}>
        <PaperTextInput
          label="Enter your password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={text => setPassword(text)}
          right={<PaperTextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
          left={<PaperTextInput.Icon icon="lock-outline" />}
          style={styles.input}
          mode="outlined"
          theme={{ colors: { primary: 'black', text: '#000' } }}
        />
        <View style={styles.errorContainer}>
          <Image
            source={require('./../assets/images/errro.png')} 
            style={styles.errorImage}
          />
          <Text style={styles.errorText}>Password is required</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <PaperTextInput
          label="Confirm your Password"
          mode="outlined"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          right={<PaperTextInput.Icon icon={confirmPasswordVisible ? "eye" : "eye-off"} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />}
          left={<PaperTextInput.Icon icon="lock-outline" />}
          style={styles.input}
          theme={{ colors: { primary: 'black', text: '#000' } }}
        />
        <View style={styles.errorContainer}>
          <Image 
            source={require('./../assets/images/errro.png')} 
            style={styles.errorImage}
          />
          <Text style={styles.errorText}>Confirmation password is required</Text>
        </View>
      </View>

      <CustomButton
        title="Save"
        onPress={handleSave} 
        style={styles.saveButton} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  boldSubtitle: {
    fontSize: 24,
    fontWeight: "500",
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    top:"-3%",
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    top:"-6%",

  },
  inputContainer: {
    marginBottom: 15,
    top:-40,
  },
  input: {
    borderRadius: 14,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  errorImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  errorText: {
    fontSize: 14,
    //color: 'red',
  },
  saveButton: {
    marginTop: -22,
  },
});
