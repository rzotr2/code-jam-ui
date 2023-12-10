import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

export interface LoginPayload {
  name: string,
  password: string
}

export interface RegisterPayload {
  name: string,
  password: string
}

export interface LoginResponse {
  token: string
}

export interface RegisterResponse {
  name: string,
  about?: string
}

@Injectable()
export class AuthRestService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  public register(registerPayload: RegisterPayload): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(`${environment.apiUrl}/auth/register`, registerPayload);

  }
  public login(loginPayload: LoginPayload): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginPayload)
  }

}
