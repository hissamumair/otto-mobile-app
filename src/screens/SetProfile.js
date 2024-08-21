import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  TextInput as PaperTextInput,
  RadioButton,
  IconButton,
} from 'react-native-paper';
import moment from 'moment';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/button'; // Ensure the path is correct
import {DatePickerModal} from 'react-native-paper-dates';
import {enUS} from 'date-fns/locale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker'

export default function SetProfile({navigation}) {
  const [gender, setGender] = useState('');
  const [focused, setFocused] = useState({
    fullName: false,
    dob: false,
    bio: false,
  });
  const [date, setDate] = useState(new Date())

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [visible, setVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');

  // Error state and messages
  const [errors, setErrors] = useState({
    fullName: '',
    bio: '',
  });

  const handleConfirm = date => {
    setDateOfBirth(date.dateString);
    setVisible(false);
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  // Example function to validate inputs
  const validateInputs = () => {
    let isValid = true;
    if (!fullName) {
      setErrors(prev => ({...prev, fullName: 'Full Name is required'}));
      isValid = false;
    }
    if (!bio) {
      setErrors(prev => ({...prev, bio: 'Bio is required'}));
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      navigation.navigate('SuccessfulRecover');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Set Your Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('./../assets/images/profilepic.png')} // Use the local profile picture
          style={styles.profilePicture}
        />
        <IconButton
          icon="camera-outline"
          size={30}
          color="#000"
          style={styles.cameraIcon}
          onPress={() => {
            // Handle camera icon press
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <PaperTextInput
            label="Full Name"
            mode="outlined"
            style={styles.input}
            theme={{
              colors: {
                primary: 'black',
                text: '#000',
                placeholder: focused.fullName ? 'black' : '#888',
              },
            }}
            onFocus={() => setFocused({...focused, fullName: true})}
            onBlur={() => setFocused({...focused, fullName: false})}
            onChangeText={text => setFullName(text)}
          />
          <View style={styles.errorContainer}>
            <Image
              source={require('./../assets/images/errro.png')} // Error image
              style={styles.errorImage}
            />
            <Text style={styles.errorText}>error message</Text>
          </View>
        </View>

        <TouchableOpacity

        
          style={styles.dateOfBirthContainer}
          onPress={() => setVisible(true)}>
          <Text style={styles.dateOfBirthText}>
            {moment(date).format('MMMM Do YYYY, h:mm:ss a')}
          </Text>
        </TouchableOpacity>

        <View style={styles.inputWrapper}>
          <PaperTextInput
            label="Add Bio"
            mode="outlined"
            multiline
            numberOfLines={3}
            style={styles.input}
            theme={{
              colors: {
                primary: 'black',
                text: '#000',
                placeholder: focused.bio ? 'black' : '#888',
              },
            }}
            onFocus={() => setFocused({...focused, bio: true})}
            onBlur={() => setFocused({...focused, bio: false})}
            onChangeText={text => setBio(text)}
          />
          <View style={styles.errorContainer}>
            <Image
              source={require('./../assets/images/errro.png')} // Error image
              style={styles.errorImage}
            />
            <Text style={styles.errorText}>error message</Text>
          </View>
        </View>
      </View>

      <Text style={styles.genderLabel}>Your Gender</Text>
      <View style={styles.radioContainer}>
        <View style={styles.radioButton}>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
            color="black"
          />
          <Text style={styles.radioLabel}>Male</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
            color="black"
          />
          <Text style={styles.radioLabel}>Female</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="other"
            status={gender === 'other' ? 'checked' : 'unchecked'}
            onPress={() => setGender('other')}
            color="black"
          />
          <Text style={styles.radioLabel}>Other</Text>
        </View>
      </View>

      <CustomButton
        title="Next"
        onPress={handleSubmit}
        style={styles.nextButton}
        icon={
        <MaterialIcons 
        name="arrow-forward" size={20} color="white" 
        />
      }
      />
      <DatePicker
        modal
        open={visible}
        date={date}
        onConfirm={(date) => {
          setVisible(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
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
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 90,
    backgroundColor: '#e0e0e0',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: -10,
    right: 75,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
  },
  dateOfBirthContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 15,
  },
  dateOfBirthText: {
    fontSize: 16,
    padding: 16,
    // color: '#000',
  },
  genderLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    top: -30,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    top: -30,
  },
  radioLabel: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  nextButton: {
    marginTop: 30,
    top: -50,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15, // Ensure there is space below the error
  },
  errorImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    top: 10,
  },
  errorText: {
    fontSize: 14,
    top: 9,
  },
});
