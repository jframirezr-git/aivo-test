import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;
  private _auth: Auth | undefined;
  
  get auth(){
    return {...this._auth}
  }
  constructor( private http: HttpClient) { }

  verificarAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('id')){
      return of(false)
    }
    return this.http.get<Auth>( `${this.apiUrl}/usuarios/1`)
              .pipe(
                map( auth => {
                  console.log('map', auth);
                  return true;
                })
              );
  }
  login(){
    return this.http.get<Auth>( `${this.apiUrl}/usuarios/1`)
              .pipe(
                tap( auth => this._auth = auth),
                tap( auth => localStorage.setItem('id', auth.id))
              );
  }
  logout(){
    this._auth = undefined;
  }
}
