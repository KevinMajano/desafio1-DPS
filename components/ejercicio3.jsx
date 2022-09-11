import { useState } from 'react';
import { Text, View , StyleSheet , TextInput, Button} from 'react-native';

const Desafio3 = function HomeScreen() {

  const [numero1,setNumero1] = useState(0);
  const [numero2,setNumero2] = useState(0);
  const [numero3,setNumero3] = useState(0);

  const [resultado1,setResultado1] = useState(0);
  const [resultado2,setResultado2] = useState(0);

  const onPressCalculate = () => {
        if(numero1 <= 0 || numero2 <= 0 || numero3 <= 0) return alert('No se aceptan valores negativos, ni cero')
        let mayor = Math.max(numero1,numero2, numero3);
        let menor = Math.min(numero1,numero2, numero3);
        if(menor > 10)  setResultado1(mayor + 10);
        if(mayor < 50)  setResultado2(menor - 5);
        if(menor < 10) setResultado1(mayor);
        if(mayor > 50) setResultado2(menor);
    }

    return (
        <View style={styles.Body}>
        <Text style={styles.Title}>Ejercicio 3</Text>
        <Text style={styles.Subtitle}>Ingresar tres numeros para calcular el mayor</Text>
        
        <TextInput
        placeholder="Numero 1"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setNumero1(value)}
        />

        <TextInput
        placeholder="Numero 2"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setNumero2(value)}
        />

        <TextInput
        placeholder="Numero 3"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setNumero3(value)}
        />

        <Button
          onPress={onPressCalculate}
          title="Calcular"
          color="#841584"
        />

        <Text style={{marginTop: 50, fontSize: 17}}>El numero mayor es: {resultado1}</Text>
        <Text style={{marginTop: 50, fontSize: 17}}>El numero menor es: {resultado2}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    Body: {
      backgroundColor: '#ffff',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 20,
        color: '#000',
        paddingHorizontal: 20,
        },
        Title:{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 35
        },
        Subtitle: {
          fontSize: 15,
          marginBottom: 25,
  
        }
  })

  export default Desafio3;