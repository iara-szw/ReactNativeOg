import {View,Text,TextInput, StyleSheet, Image,TouchableOpacity, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import imagen from './assets/image.png'
import { useEffect, useState } from 'react';

export default function App() {

  const [nombre,setNombre]=useState('')
  const [contrasenia,setContrasenia]=useState('')
const [mensaje, setMensaje] = useState('');
  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, como verificar el nombre de usuario y la contraseña [LA ia me recomendo esto solo]
    if (nombre === 'admin' && contrasenia === '123456') {
      setMensaje('Inicio de sesión exitoso');
    } else {
      setMensaje('Nombre de usuario o contraseña incorrectos, vuelva a intentarlo');
    }
  };
  return (
    
    <View style={styles.general}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Login App (Lopez,Szwarstein)</Text>
      </SafeAreaView>
    <View style={styles.form}>
        <Image style={styles.imagen} source={imagen}></Image>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput style={styles.input} placeholder="Usuario o correo" value={nombre} onChangeText={setNombre}/>
        <TextInput style={styles.input} placeholder="Contraseña" value={contrasenia} onChangeText={setContrasenia} secureTextEntry={true} />
        <Text style={styles.texto}>{mensaje}</Text>
</View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'}]}><Text style={styles.texto}>Olvidaste la contraseña?</Text></Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'}]}><Text style={styles.texto}>Crear cuenta</Text></Pressable>

      </View>
  );
}

 const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    backgroundColor: '#ffe122',
    padding: 15
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
  }
});