import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.url';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  http = inject(HttpClient);

  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  registerService(registerObj: any) {
    return this.http.post<any>(
      `${apiUrls.authServiceApi}register`,
      registerObj
    );
  }
  loginService(loginObj: any) {
    this.isAuthenticated = true;
    return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj);
  }
  isLoggedIn() {
    return !!localStorage.getItem('user_id');
  }
}
