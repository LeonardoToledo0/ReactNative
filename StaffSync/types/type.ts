export interface Veiculo {
  marca: string;
  modelo: string;
  cor: string;
  placa: string;
}
export interface Usuario {
  nome: string;
  telefone: string;
  senha: string;
  createdAt: Date;
}

export interface Usuarios {
  key: string;
  nome: string;
  email: string;
  fotoPerfil: string;
  senha: string;
  telefone: string;
  erro: string;
  loading: boolean;
  sucesso: boolean;
  getemail: string;
  getsenha?: string;
  gettelefone?: string;
  endereco: string;
  numeroApartamento: string;
  numeroVaga: string | null;
  veiculo: Veiculo[];
  bloco: string | null;
}

export interface UsuarioState {
  key: string;
  nome: string;
  email: string;
  fotoPerfil: string;
  senha: string;
  telefone: string;
  erro: string;
  loading: boolean;
  sucesso: boolean;
  getemail: string;
  getsenha: string;
  gettelefone: string;
  endereco: string;
  numeroApartamento: string;
  numeroVaga: string | null;
  veiculo: Veiculo[];
  bloco: string | null;
  usuarios: Usuarios[];
  rota: string;
}

export interface Contato {
  nome: string;
  telefone: string;
  fotoPerfil: string | null;
  online: boolean;
}

export interface Conversa {
  id: number;
  user: any;
  username: string;
  status: string;
  visto: string;
  mensagem: string;
  readonly: boolean;
  online: boolean;
  backuser: any;
  telefone: string;
  cargo: string;
  descricao: string;
  responsabilidade: string;
  qualificacoes: string;
  interesses: string;
}
export interface Conversas {
  selectConversa: string;
  activeContent: string | null;
}

export interface Noticia {
  id: number;
  user: any;
  username: string;
  image: any;
  title: string;
  datepost: string;
  description: string;
}
export interface QRcode {
  qrvalue: string;
}

export type Route = {
  key: string;
  title: string;
  focusedIcon?: string;
  unfocusedIcon?: string;
  color?: string;
  badge?: boolean | string | number;
  accessibilityLabel?: string;
  testID?: string;
};
export interface Navigations {
  index: number;
  routes: Route[];
}
export interface Login {
  login: any[];
  email: string;
  password: string;
  loading: boolean;
  erro: string | null;
  activeContent: string | null;
  selectedButton: string | null;
  isAppLoaded: boolean;
}
export interface Fab {
  open: boolean;
}

export interface Config {
  selectConfig: string;
  activeContent: string | null;
}
export type Credenciais = {
  telefone: string;
  senha: string;
};
