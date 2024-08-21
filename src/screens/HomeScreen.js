import { StyleSheet, Text, View, TouchableOpacity, Switch, Image } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function HomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const renderIcon = (iconName, iconType, serviceText) => {
    let iconSize = 24; // Default size

    // Adjust size for specific services
    if (serviceText === 'Fuel Delivery' || serviceText === 'Lockout Service' || serviceText === 'Tire Storage') {
      iconSize = 30; // Larger size for specific icons
    }

    switch (iconType) {
      case 'Ionicons':
        return <Ionicons name={iconName} size={iconSize} color="#000" />;
      case 'Feather':
        return <Feather name={iconName} size={iconSize} color="#000" />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={iconName} size={iconSize} color="#000" />;
      case 'Image':
        return (
          <Image source={iconName} style={[styles.serviceImage, { width: iconSize, height: iconSize }]} resizeMode="contain" />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Combined OTTO Roadside Assistance, Welcome, and Enable Location */}
      <View style={styles.combinedContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>OTTO ROADSIDE ASSISTANCE</Text>
          <View style={styles.notificationContainer}>
            <TouchableOpacity onPress={() => { /* Handle bell icon press */ }}>
              <Ionicons name="notifications-outline" size={24} color="#000" />
              {/* Notification Badge */}
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.boldWelcomeText}>Welcome, </Text>
          <Text style={styles.welcomeText}>John Doe</Text>
          <MaterialCommunityIcons
            name="hand-wave"
            size={24}
            color="#bfb61d"
            style={styles.handIcon}
          />
        </View>

        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Enable location</Text>
          <Switch
            trackColor={{ false: '#d9d9d9', true: '#BD2949' }}
            thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>

        <Text style={styles.infoText}>
          Service provider will easily find you.
        </Text>
      </View>

      {/* Battery Club Section */}
      <View style={styles.batteryClubContainer}>
        <TouchableOpacity style={styles.batteryClubContent}>
          <Text style={styles.batteryClubText}>
            Join the Battery club for $29.99/ month. {"\n"} Free batteries for life
          </Text>
          <SimpleLineIcons name="arrow-right" size={20} color="red" />
        </TouchableOpacity>
        <Text style={styles.batteryClubDescription}>
          Certain conditions apply
        </Text>
      </View>

      {/* Services Section Title */}
      <Text style={styles.servicesTitle}>Available Services</Text>

      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceBox}>
            {renderIcon(service.icon, service.iconType, service.text)}
            <Text style={styles.serviceText}>{service.text}</Text>
          </View>
        ))}
      </View>

      {/* Request Misc Service Section */}
      <TouchableOpacity
        style={styles.miscServiceContainer}
        onPress={() => { /* Handle request misc service */ }}
      >
        <Text style={styles.miscServiceText}>Request Misc Service</Text>
        <Ionicons
          name="chevron-forward"
          size={24} color="#000"
          style={styles.miscServiceIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const services = [
  {
    icon: require("./../assets/images/battery.png"),
    iconType: 'Image',
    text: 'Battery-Service',
  },
  {
    icon: require("./../assets/images/flattire.png"),
    iconType: 'Image',
    text: 'Flat Tire Service',
  },
  {
    icon: require("./../assets/images/fuel.png"),
    iconType: 'Image',
    text: 'Fuel Delivery',
  },
  {
    icon: require("./../assets/images/towing.png"),
    iconType: 'Image',
    text: 'Towing Service',
  },
  {
    icon: require("./../assets/images/lock.png"),
    iconType: 'Image',
    text: 'Lockout Service',
  },
  {
    icon: require("./../assets/images/swip.png"),
    iconType: 'Image',
    text: 'Seasonal Tire Swap',
  },
  {
    icon: require("./../assets/images/tirestorage.png"),
    iconType: 'Image',
    text: 'Tire Storage',
  },
  {
    icon: require("./../assets/images/moving.png"),
    iconType: 'Image',
    text: 'Moving? Need a Pickup Truck?',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c4c4c4',
  },
  combinedContainer: {
    backgroundColor: 'white',
    padding: 20,
    height: "24%",
    width: "112%",
    left: 20,
    marginHorizontal: -40,
    top: -20,
    marginRight:70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 12,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  boldWelcomeText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    top:10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#000',
    top:10,
    left:-85,
  },
  handIcon: {
    marginLeft: 10,
    left:-170,
    top:10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  toggleText: {
    fontSize: 16,
    color: '#000',
    top:10,
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  batteryClubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    height: "13%",
    width: "103%",
    marginBottom: 10,
    top: -10,
  },
  batteryClubContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  batteryClubText: {
    fontSize: 14,
    color: 'red',
    marginRight: 10,
  },
  batteryClubDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    left:-90,
  },
  servicesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    top:-9,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceBox: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'center',
  },
  serviceImage: {
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  miscServiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
  },
  miscServiceText: {
    fontSize: 14,
    color: '#000',
  },
  miscServiceIcon: {
    marginLeft: 10,
  },
});
