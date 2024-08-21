

// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// export default function CustomButton({ title, onPress, style,stylebtn }) {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[styles.button, style,stylebtn]}>
//       <Text style={styles.buttonText}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#BD2949',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function CustomButton({ title, onPress, style, icon }) {
//   return (
//     <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
//       <View style={styles.content}>
//         <Text style={styles.buttonText}>{title}</Text>
//         {icon && <View style={styles.iconContainer}>{icon}</View>}
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#BD2949',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   content: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   iconContainer: {
//     marginLeft: 8, // Space between text and icon
//   },
// });







import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustomButton = ({ title, onPress, style, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{title}</Text>
        {icon && (
          <View style={styles.iconContainer}>
            {icon}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BD2949',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default CustomButton;
