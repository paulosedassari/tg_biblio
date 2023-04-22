import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import FundoOndulado from '../../componentes/FundoOndulado';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { Formulario } from '../../componentes/Formulario';
import { Carrossel } from '../../componentes/Carrossel';
import itens from './cards';
import styles from './styles';

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);

  const animacaoCustomizada = {
    duration: 1500,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    }
  }

  LayoutAnimation.configureNext(animacaoCustomizada);

  function avancar() {

    try {
      navigation.navigate('Login');
    } catch {
      LayoutAnimation.linear();
      setAltura(400);
      setFazerLogin(true);
    }
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Image
          source={require('../../assets/logo_fatec_br.png')}
          style={styles.logo}
        />

        <View style={styles.carrosselArea}>
          {!fazerLogin && (
            <Carrossel data={itens} tempoAnimacao={2000} />
          )}
        </View>
        <Image
          source={require('../../assets/livro.png')}
          style={styles.medicaImg}
        />
        <FundoOndulado height={altura}>
          <View style={styles.infoArea}>
            {fazerLogin ?
              <Formulario
                titulo="Olá! Acesse sua conta"
                texto="Entre com suas informações. Caso não tenha uma conta, crie uma uma!"
              />
              :
              <View>
                <Text style={styles.titulo}>Seus Livros Preferidos!</Text>
                <Text style={styles.texto}>
                  Você consegue consultar todo o acervo da faculdade, e escolher o livro que melhor vai te ajudar.
                </Text>
              </View>
            }

            <TouchableOpacity style={styles.botao} onPress={avancar}>
              <Text style={styles.botaoTexto}>Começar</Text>
            </TouchableOpacity>
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}
