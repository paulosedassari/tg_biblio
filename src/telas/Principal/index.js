import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { CardConsulta } from "../../componentes/CardConsulta";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import pauloFoto from "../../assets/paulo.jpeg";
import styles from "./styles";
import { CardConsultaShimmerEffect } from "../../componentes/CardConsultaShimmerEffect";
import axios from 'axios';

export default function Principal({ navigation }) {
  const [tempo, setTempo] = useState(false)
  const [acervo, setAcervo] = useState({});

  const obras = [];

  useEffect(() => {
    setTimeout(() => {
      setTempo(true)
    }, 3000)

    buscarTodos();
  }, [])

  function buscarTodos() {
    axios.get("http://192.168.5.9:8080/acervo/buscarTodos").then(
      response => {
        setAcervo(response.data)
      }
    ).catch(error => {
      console.log("erro: ", error)
    })
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <InformacoesUsuario
          nome="Olá, Paulo!"
          detalhes="Seja bem-vindo à sua plataforma de livros da Fatec!"
          foto={pauloFoto}
        />

        <Text style={styles.texto}>Hoje</Text>

        {
          tempo ?
            <FlatList
              data={acervo}
              keyExtractor={item => String(item.idObra)}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
                  <CardConsulta {...item} />
                </TouchableOpacity>
              }
              showsVerticalScrollIndicator={false}
            />
            :
            <>
              <CardConsultaShimmerEffect />
              <CardConsultaShimmerEffect />
              <CardConsultaShimmerEffect />
            </>

        }


      </View>
    </TelaDeFundo>
  );
}