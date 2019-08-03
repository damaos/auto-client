import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async login(username: string, pwd: string) {
    const users = JSON.parse(localStorage.getItem('users'));
    const nickName = await users.find((elem => elem.username === username));
    const pass = await users.find((elem => elem.tkn === pwd));

    if (nickName === undefined) {
      return { message: 'El usuario no existe'};
    }

    if (nickName && !pass) {
      return { message: 'Contrasena incorrecta'}
    }

    if (nickName && pass) {
      return { username: nickName.username, pass: pass.tkn}
    }
  }

  async signUp(username: string, pwd: string) {
    const users = JSON.parse(localStorage.getItem('users'))
    let data = JSON.parse(users);
    const u: User = { username: username, tkn: pwd};

    if (Array.isArray(data)) {
      await data.push(u)
    } else {
      data = [];
      await data.push(u);
    }
    await localStorage.setItem('users', JSON.stringify(data))
  }
}
