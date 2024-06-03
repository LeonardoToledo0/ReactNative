import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Veiculo, Usuarios, UsuarioState } from "@/types/type";

const initialState: UsuarioState = {
  key: "",
  nome: "",
  email: "",
  fotoPerfil: "",
  senha: "",
  telefone: "",
  erro: "",
  getemail: "",
  getsenha: "",
  gettelefone: "",
  loading: true,
  sucesso: false,
  endereco: "",
  numeroApartamento: "",
  numeroVaga: null,
  bloco: null,
  veiculo: [],
  usuarios: [],
  rota: "",
};

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    setNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFotoPerfil: (state, action: PayloadAction<string>) => {
      state.fotoPerfil = action.payload;
    },
    setSenha: (state, action: PayloadAction<string>) => {
      state.senha = action.payload;
    },
    setTelefone: (state, action: PayloadAction<string>) => {
      state.telefone = action.payload;
    },
    setErro: (state, action: PayloadAction<string>) => {
      state.erro = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSucesso: (state, action: PayloadAction<boolean>) => {
      state.sucesso = action.payload;
    },
    setGetEmail: (state, action: PayloadAction<string>) => {
      state.getemail = action.payload;
    },
    setGetSenha: (state, action: PayloadAction<string>) => {
      state.getsenha = action.payload;
    },
    setGetTelefone: (state, action: PayloadAction<string>) => {
      state.gettelefone = action.payload;
    },
    setEndereco: (state, action: PayloadAction<string>) => {
      state.endereco = action.payload;
    },
    setNumeroApartamento: (state, action: PayloadAction<string>) => {
      state.numeroApartamento = action.payload;
    },
    setNumeroVaga: (state, action: PayloadAction<string | null>) => {
      state.numeroVaga = action.payload;
    },
    setVeiculo: (state, action: PayloadAction<Veiculo[]>) => {
      state.veiculo = action.payload;
    },
    setBloco: (state, action: PayloadAction<string | null>) => {
      state.bloco = action.payload;
    },
    setUsuarios: (state, action: PayloadAction<Usuarios[]>) => {
      state.usuarios = action.payload;
    },
    setRota: (state, action: PayloadAction<string>) => {
      state.rota = action.payload;
    },

    resetUsuario(state) {
      (state.nome = ""),
        (state.senha = ""),
        (state.telefone = ""),
        (state.endereco = ""),
        (state.numeroApartamento = ""),
        (state.numeroVaga = null),
        (state.veiculo = []),
        (state.bloco = null),
        (state.usuarios = []);
    },
  },
});

export const {
  setGetTelefone,
  setGetEmail,
  setGetSenha,
  setEmail,
  setErro,
  setFotoPerfil,
  setKey,
  setNome,
  setSenha,
  setTelefone,
  setSucesso,
  setLoading,
  setEndereco,
  setBloco,
  setNumeroApartamento,
  setVeiculo,
  setNumeroVaga,
  setUsuarios,
  setRota,
  resetUsuario,
} = usuarioSlice.actions;
export default usuarioSlice.reducer;
