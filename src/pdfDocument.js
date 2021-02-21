import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  section: {
    margin: 10,
    padding: 10
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  itemBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  titleReport: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  logoReport: {
    width: 54,
    height: 48
  }
})

// Create Document Component
const PdfDocument = () => {
  const dataFuncionario = [{
    nome: 'Glauber Marcelino',
    cpf: '12345678910',
    idade: 39
  },
  {
    nome: 'Acacia Santos Mota',
    cpf: '12345678910',
    idade: 45
  }]

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.logoReport} src='https://react-pdf.org/images/logo.png' allowDangerousPaths />
          <Text style={styles.titleReport}>Listagem de Funcionários</Text>
        </View>
        <View>
          <View style={styles.itemHeader}>
            {Object.keys(dataFuncionario[0]).map((key) => (<Text key={key}>{key.toUpperCase()}</Text>)
            )}
          </View>
          {dataFuncionario.map((func) => {
            return (
              <View key={func.nome} style={styles.itemBody}>
                <Text>{func.nome} </Text>
                <Text>{func.cpf} </Text>
                <Text>{func.idade} </Text>
              </View>
            )
          })}
        </View>
      </Page>
    </Document>
  )
}

export default PdfDocument
