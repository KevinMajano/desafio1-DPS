import { useState } from 'react';
import { Text, View ,StyleSheet, TextInput, Button} from 'react-native';

const Desafio2 = function HomeScreen() {
  const [salarioNeto,setSalarioNeto] = useState(0);
  const [salarioBase,setSalarioBase] = useState(0);
  const [nombre,setNombre] = useState('');

  const onPressCalculate = () => {
    let iss = salarioBase*0.03;
    let afp = salarioBase*0.04;
    let renta = salarioBase*0.05;

    let result = (salarioBase - (iss + afp + renta));
    setSalarioNeto(result);
  }

    return (
      <View style={styles.Body}>
        <Text style={styles.Title}>Ejercicio 2</Text>
        <Text style={styles.Subtitle}>Ingresar los valores para calcular el salario neto del empleado</Text>

        <TextInput
        placeholder="Nombre del empleado"
        keyboardType="text"
        style={styles.input}
        onChangeText={value => setNombre(value)}
        />

        <TextInput
        placeholder="Salario Base"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setSalarioBase(value)}
        />

      
        <Button
          onPress={onPressCalculate}
          title="Calcular Valores"
          color="#841584"
        />

        <Text style={{marginTop: 50, fontSize: 17}}>Nombre empleado: {nombre}</Text>
        <Text style={{marginTop: 10, fontSize: 17}}>Salario base: {salarioBase}</Text>
        <Text style={{marginTop: 10, fontSize: 17}}>Salario neto: {salarioNeto}</Text>
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

  export default Desafio2;