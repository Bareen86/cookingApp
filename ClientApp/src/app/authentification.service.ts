import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthentificationService {
    constructor(private _http: HttpClient) {}
    signIn(login: string, password: string) {
        console.log(login, password);
        this._http.post('https://localhost:5001/api/Authentification/SignIn', { login, password }).subscribe((data) => {
            console.log(data);
        });
    }
    signUp(name: string, login: string, password: string) {
        console.log(name, login, password);
    }
}
