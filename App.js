import React from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Bienvenido a la App</Text>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput style={styles.input}  placeholder="Usuario o correo"/>

      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});