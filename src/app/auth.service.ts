import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  checkusernamepaswd(uname: string, pwd: string) {
    if (uname === 'admin' && pwd === 'admin') {
      localStorage.setItem('username', 'admin');
      return true;
    } else if (uname === 'kunal' && pwd === 'kunal123') {
      sessionStorage.setItem('username', 'kunal');
      return 0;
    } else {
      return false;
    }
  }
}
