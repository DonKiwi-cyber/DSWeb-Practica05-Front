import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, user).pipe(
      tap((response: any) => {
        const token = response.token;
        localStorage.setItem("access_token", token)
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}register`, user);
  }

  isAuthenticated(): boolean{
    const token = localStorage.getItem('access_token');
    if(token){
      return true
    }
    return false
  }

  isTokenExpired(): boolean {
    const token = this.getDecodedToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const expirationDate = decodedToken.exp * 1000; // Convertir a milisegundos
      return Date.now() > expirationDate;
    }
    return true; // Considerar token inválido si no existe
  }

  getDecodedToken(): any {
    const token = localStorage.getItem('access_token');
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  logout(){
    localStorage.removeItem('access_token')
  }
}
