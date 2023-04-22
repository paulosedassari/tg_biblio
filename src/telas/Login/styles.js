import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 20
  },
  titulo: {
    fontWeight: "700",
    fontFamily: "Roboto",
    fontSize: 24,
    color: '#464646',
  },
  texto: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: '#A3A3A3',
    marginTop: 10,
  },
  input: {
    height: 56,
    width: '100%',
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
  containerCriarConta: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10
  },
  criarConta: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    color: '#4894FF',
    marginTop: 10,
    marginLeft: 0
  },
  esqueciSenha: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    color: '#4894FF',
    marginTop: 10,
    marginLeft: 70
  },
  botao: {
    height: 60,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#4894FF',
    marginVertical: 10,
  },
  botaoTexto: {
    fontWeight: "700",
    fontFamily: "Roboto",
    fontSize: 16,
    color: '#FFFFFF',
  }
});