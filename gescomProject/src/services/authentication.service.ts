import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SERVER_API_URL } from "../config/config";
@Injectable()
export class AuthenticationServive{

    constructor(private http:HttpClient){

    }
    login(user){
       return this.http.post(SERVER_API_URL+"/login",user,{observe:'response'});//permet d'empêcher le retour au format json
    }
    saveToken(jwt:string){
        localStorage.setItem('token',jwt);
    }
}