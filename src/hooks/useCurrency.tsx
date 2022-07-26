import {useEffect, useState} from "react";
import {Platform} from "react-native";

interface Currency {
  precio_compra_dolar: number;
  precio_venta_dolar: number;
  precio_compra_euro: number;
  precio_venta_euro: number;
  precio_compra_gbp: number;
  precio_venta_gbp: number;
  precio_compra_cad: number;
  precio_venta_cad: number;
  precio_compra_chf: number;
  precio_venta_chf: number;
  precio_compra_aud: number;
  precio_venta_aud: number;
  ultima_actualizacion: string;
  ultima_actualizacion_plantilla: string;
}

export const useCurrency = () => {
  const [currency, setCurrency] = useState<Currency>();
  const [isLoading, setIsLoading] = useState(true);

  const getCurrencyData = async () => {
    const res = await fetch(`${ Platform.OS === 'android' ? 'http' : 'https' }://dimesa.com/admin/index.php/ajax/values`);
    const data = await res.json();
  
    setCurrency(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCurrencyData();
  }, []);

  return {
    currency,
    isLoading
  };
};
