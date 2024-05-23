import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UsuarioState {
  key: string;
  nome: string;
  email: string;
  imagemPerfil: string;
  senha: string;
  telefone: string;
  erro: string;
  loading: boolean;
  sucesso: boolean;
  getemail: string;
  getsenha: string;
}
const initialState: UsuarioState = {
  key: "",
  nome: "",
  email: "",
  imagemPerfil: "",
  senha: "",
  telefone: "",
  erro: "",
  getemail: "",
  getsenha: "",
  loading: true,
  sucesso: false,
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
    setImagemPerfil: (state, action: PayloadAction<string>) => {
      state.imagemPerfil = action.payload;
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
  },
});
export const {
  setGetEmail,
  setGetSenha,
  setEmail,
  setErro,
  setImagemPerfil,
  setKey,
  setNome,
  setSenha,
  setTelefone,
  setSucesso,
  setLoading,
} = usuarioSlice.actions;
export default usuarioSlice.reducer;
