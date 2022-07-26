import React from 'react';
import {HStack, Text, VStack} from 'native-base';
import {SvgCssUri} from 'react-native-svg';
import {flags} from '../../assets/images';

// To Export Local SVG URI
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

interface Props {
  typeChange: keyof typeof flags;
  sell: number;
  buy: number;
}


const CardCurrency = ({ typeChange, sell, buy }: Props) => {
  return (
    <HStack
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      justifyContent='space-around'
      alignItems='center'
      padding={ 3 }
      rounded='md'
    >
      <Text fontSize='xl' fontWeight='bold'>{ typeChange }</Text>
      <SvgCssUri 
        width={ 60 }
        height={ 60 }
        uri={ resolveAssetSource(flags[typeChange]).uri }
      />
      <VStack alignItems='center'>
        <Text>Compra</Text>
        <Text fontSize='xl' fontWeight='bold'>${ buy }</Text>
      </VStack>
      <VStack alignItems='center'>
        <Text>Venta</Text>
        <Text fontSize='xl' fontWeight='bold'>${ sell }</Text>
      </VStack>
    </HStack>
  );
};

export default CardCurrency;

