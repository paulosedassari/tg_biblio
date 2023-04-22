import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export function CardConsulta({ nomeObra, foto, status, tipoLivro, icon }) {

  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={foto} style={styles.foto} />
        <View style={styles.informacoes}>
          <Text style={styles.nome}>{nomeObra}</Text>
          <View style={styles.consultaArea}>
            <Text style={styles.genero}>Gênero</Text>
            <Text>{tipoLivro}</Text>
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Text style={styles.texto}></Text>
        <View style={styles.botoesArea}>
          {icon === "video" ?
            <>
              <TouchableOpacity style={[styles.botao, { backgroundColor: '#FFB050' }]}>
                <Text style={styles.botaoTexto}>Ligar por vídeo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Ligar por áudio</Text>
              </TouchableOpacity>
            </> :
            <TouchableOpacity style={styles.botaoLocalizacao}>
              <Text style={[styles.botaoTexto, { color: '#FFF' }]}>{status}</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}