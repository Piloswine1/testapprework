export type Credentials = {
  username: string;
  password: string;
};

export type Token = {
  accessToken: string;
  refreshToken: string;
};

export type AuthStore = {
  isAuthenticated: boolean;
  token: Token | null;
};

export type RegistrationRequest = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
};
