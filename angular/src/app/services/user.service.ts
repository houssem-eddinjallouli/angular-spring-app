import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Activities } from '../models/activitie';
import { AdvancedUser } from '../models/addadvenceduser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
v1!:string;
v2!:string;
//http://localhost:8089/codemasters/user/retrieve-all-users
private apiServerUrl='http://localhost:8089/codemasters/user';
constructor(private http:HttpClient,private router: Router) { }

public getUsers():Observable<User[]>{
  return this.http.get<any>(`${this.apiServerUrl}/retrieve-all-users`);
} 

public getActivities():Observable<Activities[]>{
  return this.http.get<any>(`${this.apiServerUrl}/retrieve-all-activities`);
} 

public getUser(userId: number):Observable<User>{
  return this.http.get<User>(`${this.apiServerUrl}/retrieve-user/${userId}`);
} 

public updaetUser(user: User):Observable<string>{
  return this.http.put<string>(`${this.apiServerUrl}/updateaccount`, user);
} 
  public addSimpleUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.apiServerUrl}/add-simple-user`, user);
  }

  addUser(user: AdvancedUser): Observable<string> {
    return this.http.post<string>(`${this.apiServerUrl}/add-user`, user);
  }

public updateUserold(user: User):Observable<User>{
  return this.http.put<User>(`${this.apiServerUrl}/modify-user`,user);
}

public deleteUser(userId: number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/remove-user/${userId}`);
}


public bloquage(userId: number):Observable<void>{
  return this.http.put<void>(`${this.apiServerUrl}/bloquer-debloquer/${userId}`, {});
}

public modifierRole(userId: number,role:string):Observable<void>{
  return this.http.put<void>(`${this.apiServerUrl}/modify-role/${userId}/${role}`, {});
}

public modifierImage(userId: number,img:string):Observable<void>{
  return this.http.put<void>(`${this.apiServerUrl}/modify-img/${userId}/${img}`, {});
}

public getRoles(): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiServerUrl}/roles`);
}
public getGenders(): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiServerUrl}/genders`);
}

public restPasswd(mail:string): Observable<string> {
  return this.http.get<string>(`${this.apiServerUrl}/getpassword/${mail}`);
}

public updatePasswd(id:number,oldp:string,newp:string): Observable<string> {
  return this.http.get<string>(`${this.apiServerUrl}/update-password/${id}/${oldp}/${newp}`);
}


public generatecard(id: number,code:string):Observable<void>{
  return this.http.put<void>(`${this.apiServerUrl}/add-card/${id}/${code}`, {});
}

public verifyaccount(code: string): Observable<string> {
  return this.http.get<string>(`${this.apiServerUrl}/verifyaccount/${code}`);
}


//auth service
setToken(token: string): void {
  localStorage.setItem('token', token);
}

getToken(): string | null {
  return localStorage.getItem('token');
}

isLoggedIn() {
  return this.getToken() !== null;
}

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['signin']);
}



public authenticate(email: string, password: string): Observable<string> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const options = { headers: headers };
  this.setToken(email);
  return this.http.get<string>(`${this.apiServerUrl}/authentification?email=${email}&password=${password}`, options);
}

public getUserbyemail():Observable<User>{
  return this.http.get<User>(`${this.apiServerUrl}/retrieve-userbymail/${this.getToken()}`);
} 

public barrcodetomail(code: string): Observable<string> {
  return this.http.get<string>(`${this.apiServerUrl}/barrcodetomail/${code}`);
}

public authenticatebarrcode(code: string): Observable<string> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const options = { headers: headers };
  return this.http.get<string>(`${this.apiServerUrl}/authentificationbarrcode?code=${code}`, options);
}
}
