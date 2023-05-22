import React, { useState, useEffect } from 'react'
import { 
  Text, 
  View, 
  Image, 
  StyleSheet 
} from 'react-native'

import globalStyles from '../styles'
import { formatearCantidad } from '../helper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ControlPresupuesto = ({ presupuesto, gastos }: any) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total: any, gasto: any) => Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastado

    setDisponible(totalDisponible)
    setGastado(totalGastado)
  }, [gastos])

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image style={styles.imagen} source={require('../img/grafico.jpg')} />
      </View>

      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: {' '}</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {' '}</Text>
          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {' '}</Text>
          {formatearCantidad(gastado)}
        </Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor
  },
  centrarGrafica: {
    alignItems: 'center',
  },
  imagen: {
    width: 250,
    height: 250
  },
  contenedorTexto: {
    marginTop: 50,
    textAlign: "right"
  },
  valor: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color:'black',
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6',
    fontSize: 16,
  }

});

export default ControlPresupuesto