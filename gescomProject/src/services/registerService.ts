import { Injectable } from "@angular/core";


import { Observable } from "rxjs";
import { RequestOptions, Headers } from "@angular/http";
import {SERVER_API_URL} from '../config/config'; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../Model/UserModel";

@Injectable()
export class RegisterService{
    constructor(private http:HttpClient){}
    private jwtToken=null;

    loadToken(){
        this.jwtToken=localStorage.getItem('token');
    }
    saveUser(user:UserModel, file:File): Observable<any> {//, access_token: string, parametre enlévé
        if(this.jwtToken==null) this.loadToken();

        let headers = new Headers();
        let options = new RequestOptions({ headers: headers }); 
        let formData = new FormData();
        formData.append('image', file);
        formData.append('username', user.username);
        formData.append('password', user.password); 
       // formData.append('roles', user.roles);
       // formData.append('fonction', user.fonction); 
        formData.append('email', user.email);
        formData.append('telephone', user.telephone);  
        formData.append('nomPrenom', user.nomPrenom); 

   return this.http.post(SERVER_API_URL+ "/management/account", formData,
            {observe:'response',headers:new HttpHeaders(
                 {'authorization':this.jwtToken}
                    )});//,options;
}
getUser(){
    if(this.jwtToken==null) this.loadToken();
     return this.http.get(SERVER_API_URL+"/management/account",
        {headers:new HttpHeaders(
            {'authorization':this.jwtToken}
        )});
    }

    getRole(){
        if(this.jwtToken==null) this.loadToken();
        return this.http.get(SERVER_API_URL+"/management/role",
           {headers:new HttpHeaders(
               {'authorization':this.jwtToken}
           )});  
    }
    addRoleToUser(email:string,roleName:string){
        
        if(this.jwtToken==null) this.loadToken();
        
        return this.http.post(SERVER_API_URL+ "/management/addRoleToUser/"+email+"/"+roleName, 
            {observe:'response',headers:new HttpHeaders(
                 {'authorization':this.jwtToken}
                    )});//,options;

    }
    getUserMc(motCle:string,page:number,size:number){
        if(this.jwtToken==null) this.loadToken();
        return this.http.get(SERVER_API_URL+ "/management/accountMc?mc="
            +motCle+"&page="+page+"&size="+size,
            {headers:new HttpHeaders(
                {'authorization':this.jwtToken}
            )});
    }

    DeleteUser(userId:number){
        if(this.jwtToken==null) this.loadToken();
        return this.http.get(SERVER_API_URL+ "/management/DeleteUser/"
        +userId,
        {headers:new HttpHeaders(
            {'authorization':this.jwtToken}
        )});
    }

    getUserId(id:number){
        if(this.jwtToken==null) this.loadToken();
        return this.http.get(SERVER_API_URL+"/management/getUser/"
        +id,{headers:new HttpHeaders(
            {'authorization':this.jwtToken}
        )});
    }

    getFunction(){
        if(this.jwtToken==null) this.loadToken();
     return this.http.get(SERVER_API_URL+"/api/fonction",
        {headers:new HttpHeaders(
            {'authorization':this.jwtToken}
        )});
    }

    updateUser(user:UserModel, file:File,id:number): Observable<any> {//, access_token: string, parametre enlévé
        if(this.jwtToken==null) this.loadToken();

        let headers = new Headers();
        let options = new RequestOptions({ headers: headers }); 
        let formData = new FormData();
        formData.append('photo', file);
        formData.append('username', user.username);
        formData.append('password', user.password); 
        //formData.append('roles', user.roles);
       //formData.append('fonction', user.fonction); 
        formData.append('email', user.email);
        formData.append('telephone', user.telephone);  
        formData.append('nomPrenom', user.nomPrenom); 

   return this.http.post(SERVER_API_URL+ "/management/account/"
            +id+"/"+user.roleName, formData,
            {observe:'response',headers:new HttpHeaders(
                 {'authorization':this.jwtToken}
                    )});//,options;
}

}