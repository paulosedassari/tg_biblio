import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import SemCadastroModal from '../../componentes/ModalSemCadastro';
import styles from './styles';
import axios from 'axios';

export default function Login({ titulo, texto, navigation }) {
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

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const [mostrarModal, setMostrarModal] = useState(false);

  const usuarioChange = (novoUsuario) => {
    setUsuario(novoUsuario);
  };

  const senhaChange = (novoSenha) => {
    setSenha(novoSenha);
  };

  LayoutAnimation.configureNext(animacaoCustomizada);

  function criarConta() {
    navigation.navigate('CriarConta');
  }

  function logar() {
    verificarLogin(usuario, senha);
  }

  function verificarLogin(usuario, senha) {

    if (usuario === '' || senha === '') {
      throw new Error('usuario ou senha vazios');
    }

    axios.get("http://192.168.5.9:8080/mobile/logar/" + usuario + "/" + senha).then(
      response => {

        if (response.data !== true) {
          
        }

        if (response.data === true) {
          console.log("Usuário logado com sucesso!")
          navigation.navigate('Principal');
        } else {
          LayoutAnimation.linear();
          setAltura(400);
          setFazerLogin(true);
        }
      }
    ).catch(error => {
      console.log("erro: ", error)
    })
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <Text style={styles.titulo}>Olá! Acesse sua conta</Text>
        <Text style={styles.texto}>Entre com suas informações. Caso não tenha uma conta, crie uma uma!</Text>
        <TextInput
          onChangeText={usuarioChange}
          value={usuario}
          style={styles.input}
          placeholder="RA"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={senhaChange}
          value={senha}
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <SafeAreaView style={styles.containerCriarConta}>
          <TouchableOpacity onPress={criarConta}>
            <Text style={styles.criarConta}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
          </TouchableOpacity>

        </SafeAreaView>

        <TouchableOpacity style={styles.botao} onPress={logar}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

      </View>

      <SemCadastroModal
        isVisible={mostrarModal}
        onClose={() => setMostrarModal(false)}
      />

    </TelaDeFundo>
  );
}
