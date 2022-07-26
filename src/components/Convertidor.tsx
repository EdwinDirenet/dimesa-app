import React, {useState} from 'react';
import {Button, HStack, Select, Text, VStack, Stack, View, Input} from 'native-base';

const Convertidor = () => {

  const [from, setFrom] = useState('MXN');
  const [to, setTo] = useState('USD');
  const [mount, setMount] = useState('');
  const [result, setResult] = useState(null);

  const makeConvertion = async () => {
    const res = await fetch(`https://www.dimesa.com/admin/index.php/ajax/conversor?mount=${ mount }&from=${ from }&to=${ to }`);
    const result = await res.json();

    setResult(result);
  }


  return (
    <View>
      <Input fontSize='lg' color='white' placeholder='Cantidad...' mb={ 3 } value={ mount } onChangeText={ (v) => setMount(v) } />
      <HStack
        space={ 3 }
      >
        <VStack flex={ 1 }>
          <Text fontSize='lg' fontWeight='bold'>Quiero cambiar</Text>
          <Select
            selectedValue={ from }
            onValueChange={ value => setFrom(value) }
            fontSize='lg'
            color='white'
          >
            <Select.Item label="MXN" value="MXN" />
            <Select.Item label="USD" value="USD" />
            <Select.Item label="EUR" value="EUR" />
            <Select.Item label="CAD" value="CAD" />
            <Select.Item label="GBP" value="GBP" />
            <Select.Item label="CHF" value="CHF" />
          </Select>
        </VStack>
        <VStack flex={ 1 }>
          <Text fontSize='lg' fontWeight='bold'>Voy a recibir</Text>
          <Select
            selectedValue={ to }
            onValueChange={ value => setTo(value) }
            fontSize='lg'
            color='white'
          >
            <Select.Item label="MXN" value="MXN" />
            <Select.Item label="USD" value="USD" />
            <Select.Item label="EUR" value="EUR" />
            <Select.Item label="CAD" value="CAD" />
            <Select.Item label="GBP" value="GBP" />
            <Select.Item label="CHF" value="CHF" />
          </Select>
        </VStack>
      </HStack>
      <Button
        mt={ 3 }
        backgroundColor='secondary.900'
        onPress={ makeConvertion }
      >
        <Text color='white' fontSize='md' fontWeight='bold'>Convertir</Text>
      </Button>
      <View alignItems='center'>
        {
          ( result ) && <Text fontSize='2xl' fontWeight='bold' mt={ 5 }>${ result }</Text>
        }
      </View>
    </View>
  );
};

export default Convertidor;

