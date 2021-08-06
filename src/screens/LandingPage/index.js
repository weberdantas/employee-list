import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PrimaryButton, InputBasic } from '../../components';

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    storeData();
  }, []);

  const storeData = async () => {
    const data = {
      username: 'weberdantas',
      password: '123456',
    };

    try {
      await AsyncStorage.setItem('@user_data', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_data');
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.log(e);
      return '';
    }
  };

  const handleSubmit = async () => {
    try {
      const data = await getData();

      if (data) {
        if (username === data?.username && password === data?.password) {
          //Alert.alert('Legal', 'Login efetuado com sucesso!');
          navigation.navigate("Home");
        } else {
          Alert.alert('Ops...', 'Credenciais inválidas. Tente novamente.');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: 'https://cdn.iconscout.com/icon/free/png-512/best-employee-23-1117676.png',
          }}
        />
      </View>
      <View style={styles.inputsContainer}>
        <View style={{ width: '80%', marginBottom: 12 }}>
          <InputBasic
            thisRef={inputRef1}
            label="Usuário"
            value={username}
            onChange={value => setUsername(value)}
            placeholder="Nome de usuário"
            onSubmitEditing={() => inputRef2.current.focus()}
          />
        </View>
        <View style={{ width: '80%' }}>
          <InputBasic
            thisRef={inputRef2}
            label="Senha"
            isPassword={true}
            value={password}
            onChange={value => setPassword(value)}
            placeholder="Insira sua senha"
            onSubmitEditing={() => handleSubmit()}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ width: '60%' }}>
          <PrimaryButton title="Entrar" onPress={() => handleSubmit()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 170,
    width: 170,
  },
});

export default LandingPage;
