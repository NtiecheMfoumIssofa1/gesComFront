import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SERVER_API_URL } from "../config/config";
import { TaxesModel } from "../Model/TaxesModel";

@Injectable()
export class TaxesService{

    private jwtToken=null;
        constructor(private http:HttpClient){}


    loadToken(){
        this.jwtToken=localStorage.getItem('token');
    }
 
    getTaxes(page:number,size:number){
        if(this.jwtToken==null) this.loadToken();

        return this.http.get(SERVER_API_URL+"/api/taxeMc?page="+page+"&size="+size,
            {headers:new HttpHeaders(
                {'authorization':this.jwtToken}
            )});
    }
    save(taxe:TaxesModel){
        if(this.jwtToken==null) this.loadToken();
        return this.http.post(SERVER_API_URL+"/api/taxeDelete",taxe,
            {headers:new HttpHeaders( 
                {'authorization':this.jwtToken}
            )});

    }
    deleteTaxe(id:number){
        if(this.jwtToken==null) this.loadToken();
        return this.http.get(SERVER_API_URL+"/api/taxe/"+id,
            {headers:new HttpHeaders(
                {'authorization':this.jwtToken}
            )});
    }

}