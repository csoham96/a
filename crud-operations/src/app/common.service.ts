import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }
  createUser(user: IUser) {
    return this._http.post('http://localhost:3000/users', user);
  }
  getAllUser(): Observable<IUser[]> {
    return this._http.get<IUser[]>('http://localhost:3000/users');
  }
  updateUser(user: IUser) {
    return this._http.put('http://localhost:3000/users/' + user.id,user)
   }
  deleteUser(user : IUser) { 
    return this._http.delete("http://localhost:3000/users/"+ user.id)
  }

}
