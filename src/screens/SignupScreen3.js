import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import {
  Provider as PaperProvider,
  TextInput,
  Checkbox,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignupScreen3({navigation}) {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Sign up</Text>
        </View>

        <View style={styles.stepperContainer}>
          <View style={[styles.stepLine, styles.stepLineActive]} />
          <View style={[styles.stepLine, styles.stepLineActive]} />
          <View style={[styles.stepLine, styles.stepLineInactive]} />
        </View>

        <View style={styles.content}>
        <TextInput
            style={styles.input}
            mode="outlined"
            label={"Email"}
            placeholder='e.g johndoe@email.com'
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
            style={{top:-3,left:13}}
          />
          <Text style={{top:-19,left:35}}>error message</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
              color="#BD2949"
            />
            <Text style={styles.checkboxText}>
              By continuing, you confirm that you agree with our{' '}
              <Text style={styles.termsText}>Terms and Conditions</Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('SignupScreen4')}
            // Navigate to Screen 4
          >
            <Text style={styles.buttonText}>Continue</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </PaperProvider>
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
    marginBottom: 40, // Adjusted margin to move up
  },
  backButton: {
    marginRight: 10,
    top: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: '#000',
    top: 10,
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stepLine: {
    height: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  stepLineActive: {
    backgroundColor: '#BD2949',
    borderRadius:20,
    // Color for the active steps
  },
  stepLineInactive: {
    backgroundColor: '#D3D3D3',
    borderRadius:20,
    // Color for the inactive steps
  },
  // content: {
  //   marginTop: 20, // Moves the content just below the stepper
  //   alignItems: 'center',
  // },
  textInput: {
    width: '100%',
    marginBottom: 25,
    top:-20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 16,
    // color: '#000',
    marginLeft: 8,
  },
  termsText: {
    fontWeight: 'bold',
    // color: '#BD2949', // Darker color for "Terms and Conditions"
  },
  continueButton: {
    width: '100%',
    height:50,
    backgroundColor: '#BD2949',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,

  },
  input: {
    marginBottom: 15,
    //padding: 5,
    borderRadius: 24,
  },
  icon:{
    top:-20,
    left:50,
  }
});
