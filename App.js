import { View, Text, TextInput,Image, StyleSheet,Pressable, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import imagen from './assets/image.png'


export default function App() {
  const port = 3000; 
  const [nombre, setNombre] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [logeado,setLogeado]=useState(false)

  const handleLogin = async () => {
    try {
      const payload = { username: nombre, password: contrasenia };
      let response = null;
      let data = null;

      response = await fetch(`http://localhost:${port}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);
        setMensaje('Login correcto');
        setLogeado(true)
      } else {
        setMensaje(data.message || 'Error');
        setLogeado(false)
      }
    } catch (error) {
      setMensaje('No se pudo conectar'+error);
    }
  };

   return (
    <SafeAreaProvider>
      <View style={styles.general}>
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.title}>Login App (Lopez, Szwarstein)</Text>
        </SafeAreaView>
        <View style={styles.form}>
          <Image style={styles.imagen} source={imagen} />
          <Text style={styles.title}>Iniciar Sesión</Text>

          <TextInput style={styles.input} placeholder="Usuario o correo" value={nombre} onChangeText={setNombre} />
          <TextInput style={styles.input} placeholder="Contraseña" value={contrasenia} onChangeText={setContrasenia} secureTextEntry />
          <Text style={styles.texto}>{mensaje}</Text>
          {logeado ? <Text style={styles.successText}>Sesión activa con JWT</Text> : null}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white' }]}> 
          <Text style={styles.texto}>Olvidaste la contraseña?</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white' }]}> 
          <Text style={styles.texto}>Crear cuenta</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    backgroundColor: '#ffe122',
    padding: 15,
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
    marginLeft: 40,
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
    borderRadius: 15,
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
  successText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 15,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
});