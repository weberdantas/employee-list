import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { PrimaryButton, SettingsItem } from '../../components';

import userImage from '../../assets/images/user.png';

const Settings = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={userImage} style={styles.image} />
        <Text style={styles.textName}>Weber Dantas</Text>
        <Text style={styles.textEmail}>weber.dantas@example.com</Text>
        <View style={styles.buttonTopContainer}>
          <PrimaryButton title="Editar Perfil" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.textSection}>Opções</Text>
      </View>
      <SettingsItem
        title="Favoritos"
        iconName="heart-outline"
        iconColor="red"
        onPress={() => {}}
      />
      <SettingsItem
        title="Downloads"
        iconName="cloud-download-outline"
        onPress={() => {}}
      />
      <SettingsItem
        title="Alterar idioma"
        iconColor="blue"
        iconName="language-outline"
        textRight='Português'
        onPress={() => {}}
      />
      <SettingsItem
        title="Dark Mode"
        iconName="moon-outline"
        iconColor="#543daf"
        isSwitch
        onPress={() => {}}
      />
      <SettingsItem
        title="Dark Mode"
        iconName="moon-outline"
        iconColor="#543daf"
        isSwitch
        onPress={() => {}}
      />
      <SettingsItem
        title="Dark Mode"
        iconName="moon-outline"
        iconColor="#543daf"
        isSwitch
        onPress={() => {}}
      />
      <SettingsItem
        title="Dark Mode"
        iconName="moon-outline"
        iconColor="#543daf"
        isSwitch
        onPress={() => {}}
      />
      <SettingsItem
        title="Dark Mode"
        iconName="moon-outline"
        iconColor="#543daf"
        isSwitch
        onPress={() => {}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 4,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 140,
    height: 140,
    marginVertical: 18,
    borderRadius: 22,
  },
  textName: {
    fontFamily: 'Georama-Bold',
    fontSize: 20,
    marginBottom: 4,
  },
  textEmail: {
    fontFamily: 'Georama-Regular',
    fontSize: 16,
    marginBottom: 4,
  },
  buttonTopContainer: {
    width: '60%',
    marginVertical: 8,
  },
  section: {
    width: '100%',
    height: 45,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  textSection: {
    fontFamily: 'Georama-Bold',
    fontSize: 14,
  },
});

export default Settings;
