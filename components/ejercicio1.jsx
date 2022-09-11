import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const Desafio1 = function HomeScreen() {
  const [valorA,setValorA] = useState(0);
  const [valorB,setValorB] = useState(0);
  const [valorC,setValorC] = useState(0);

  const [resultado1,setResultado1] = useState(0);
  const [resultado2,setResultado2] = useState(0);

  const onPressCalculate = () => {
    let result1 = (-valorB + Math.sqrt( Math.pow(valorB,2) - (4*(valorA * valorC))))/(2*valorA);
    let result2 = (-valorB - Math.sqrt( Math.pow(valorB,2) - (4*(valorA * valorC))))/(2*valorA);
    setResultado1(result1);
    setResultado2(result2);
  }

    return (
      <View style={styles.Body}>
        <Text style={styles.Title}>Ejercicio 1</Text>
        <Text style={styles.Subtitle}>Ingresar los valores para calcular la solucion a la ecuación cuadratica</Text>
        <TextInput
        placeholder="Valor de A"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setValorA(value)}
        value= {valorA}
        />

        <TextInput
        placeholder="Valor de B"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setValorB(value)}
        />

        <TextInput
        placeholder="Valor de C"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setValorC(value)}
        />

        <Button
          onPress={onPressCalculate}
          title="Calcular Valores"
          color="#841584"
        />

        <Text style={{marginTop: 50, fontSize: 17}}>Solucion uno: {resultado1}</Text>
        <Text style={{marginTop: 10, fontSize: 17}}>Solucion dos: {resultado2}</Text>
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
  export default Desafio1;