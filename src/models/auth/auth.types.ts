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