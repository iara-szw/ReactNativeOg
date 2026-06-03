import React from 'react';
import {View,Text,TextInput, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import image from './assets/image.png'

export default function App() {
  return (
    
    <View style={styles.general}>
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Login App (Lopez,Szwarstein)</Text>
      </SafeAreaView>
    </View>
    <View style={styles.form}>
        <Image style={styles.imagen} source={image}></Image>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput style={styles.input} placeholder="Usuario o correo" />

        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
</View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
                <Text style={styles.texto}>Olvidaste la contraseña?</Text>
        <Text style={styles.texto}>Crear cuenta</Text>

      </View>
  );
}

 const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    backgroundColor: '#ffe122',
    padding: 15,
  },

  safeArea: {
    padding: 5,
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    
  },

  imagen: {
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
    marginLeft:40
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ffe122',
    backgroundColor: '#FFF',
    padding: 12,
    marginBottom: 15,
    borderRadius:15

  },

  button: {
    backgroundColor: '#ffe122',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 40,
    marginBottom: 15,
  },

  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  texto: {
     fontSize: 15,
    textAlign: 'center',
    marginBottom: 15,
  },
});