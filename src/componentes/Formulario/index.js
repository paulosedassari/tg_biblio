import React, { useState } from "react";
import { View, TextInput, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Formulario({ titulo, texto, navigation }) {

  const [email, setEmail] = useState('');

  const emailChange = (novoEmail) => {
    setEmail(novoEmail);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.texto}>{texto}</Text>
      <TextInput
        onChangeText={emailChange}
        value={email}
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <SafeAreaView style={styles.containerCriarConta}>
        <TouchableOpacity>
          <Text style={styles.criarConta}>Criar conta {email}</Text>
        </TouchableOpacity>
        <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
      </SafeAreaView>

    </View>
  );
}