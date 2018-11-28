import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {SERVER_API_URL} from '../config/config';
import { FamilleArticleModel } from "../Model/FamilleArticleModel";
@Injectable()
export class FamilleArticleService{
    private jwtToken=null;
    constructor(private http:HttpClient){}
   

    loadToken(){
        this.jwtToken=localStorage.getItem('token');
    }

    getFamille(motcle:string,page:number,size:number){

        if(this.jwtToken==null) this.loadToken();

        return this.http.get(SERVER_API_URL+"/api/familleArticleMc?mc="
            +motcle+"&page="+page+"&size="+size,
            {headers:new HttpHeaders(
                {'authorization':this.jwtToken}
            )});
    }

    saveFamille(famille:FamilleArticleModel){

        if(this.jwtToken==null) this.loadToken();

        return this.http.post(SERVER_API_URL+"/api/familleArticle",famille,
         {headers:new HttpHeaders(
            {'authorization':this.jwtToken}
        )});
    }
    getFamilleId(id:number){

        if(this.jwtToken==null) this.loadToken();

        return this.http.get(SERVER_API_URL+"/api/familleArticleId/"+id,
            {headers:new HttpHeaders(
                {'authorization':this.jwtToken}
            )});
    }
    update(famille:FamilleArticleModel,id:number){

        if(this.jwtToken==null) this.loadToken();

        return this.http.post(SERVER_API_URL+"/api/familleArticle/"+id,famille,
            {headers:new HttpHeaders(
                {'authorization':this.jwtToken}
            )});

    }

    deleteFamille(id:number){
        if(this.jwtToken==null) this.loadToken();

        return this.http.get(SERVER_API_URL+"/api/familleArticle/"+id,
            {headers:new HttpHeaders(
                {'authorization':this.jwtToken}
            )});


    }

}