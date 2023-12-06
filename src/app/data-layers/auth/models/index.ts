export interface LoginPayload {
  name: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  name: string;
}
