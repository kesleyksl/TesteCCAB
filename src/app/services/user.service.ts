import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`)
  }
  getUserById(id: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}
