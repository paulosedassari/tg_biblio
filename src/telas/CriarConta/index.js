import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import InclusaoModal from '../../componentes/Modal/inclusao.js';
import ValidaSenhaModal from '../../componentes/Modal/validaSenha.js';
import styles from './styles';
import axios from 'axios';
import cadastro from './Cadastro';

export default function CriarConta({ navigation }) {

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

  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [ra, setRa] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirma] = useState('');

  const [mostrarModal, setMostrarModal] = useState(false);
  const [validaSenhaModal, setValidaSenhaModal] = useState(false);


  const usuarioChange = (novoUsuario) => {
    setNome(novoUsuario);
  };

  const apelidoChange = (novoApelido) => {
    setApelido(novoApelido);
  };

  const raChange = (novoRa) => {
    setRa(novoRa);
  };

  const cpfChange = (novoCpf) => {
    setCpf(novoCpf);
  };

  const senhaChange = (novaSenha) => {
    setSenha(novaSenha);
  };

  const confirmaSenhaChange = (confirmaSenha) => {
    setConfirma(confirmaSenha);
  };



  LayoutAnimation.configureNext(animacaoCustomizada);

  function resetarPassword() {
    navigation.navigate('CriarConta');
  }

  function cadastrar() {
    cadastro.nomeUsuario = nome
    cadastro.apelido = apelido
    cadastro.cpf = cpf
    cadastro.ra = ra
    cadastro.senha = senha;

    ;

    if (validaSenha(senha, confirmaSenha)) {
      axios.post("http://192.168.5.9:8080/mobile/incluir", cadastro).then(
        response => {

          if (response.data === true) {
            console.log("Usuário cadastrado com sucesso!")
            setMostrarModal(true);
          } else {
            console.log("Não foi possível cadastrar o usuário: ", nomeUsuario)
          }
        }
      ).catch(error => {
        console.log("erro: ", error)
      })
    }

  }

  function validaSenha(senha, confirmaSenha) {
    if (senha !== confirmaSenha) {
      setValidaSenhaModal(true);
      return true;
    }
    return false;
  }

  function redirecionarLogin() {
    navigation.navigate('Login');
  }



  function verificarLogin(usuario, senha) {

    if (usuario === '' || senha === '') {
      throw new Error('usuario ou senha vazios');
    }

    axios.get("http://192.168.5.9:8080/usuario/logar/" + usuario + "/" + senha).then(
      response => {
        if (response.data === true) {
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
        <Text style={styles.titulo}>Vamos criar sua conta!</Text>
        <Text style={styles.texto}>Comece preenchendo o formulário.</Text>
        <TextInput
          onChangeText={usuarioChange}
          value={nome}
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={apelidoChange}
          value={apelido}
          style={styles.input}
          placeholder="Apelido Para Tela Inicial"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={cpfChange}
          value={cpf}
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={raChange}
          value={ra}
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

        <TextInput
          onChangeText={confirmaSenhaChange}
          value={confirmaSenha}
          style={styles.input}
          placeholder="Confirme a senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>


      </View>

      <InclusaoModal
        isVisible={mostrarModal}
        onClose={redirecionarLogin}
      />

      <ValidaSenhaModal
        isVisible={validaSenhaModal}
        onClose={() => setValidaSenhaModal(false)}
      />

    </TelaDeFundo>
  );
}
