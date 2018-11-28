import { Http } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import { Injectable } from "@angular/core";
import {HttpRequest, HttpEvent,HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from "../config/config";
@Injectable()
export class FileUploaderService{
    constructor(private http:Http){

    }
    public uploadImage(formdata: any){
        let url:string=SERVER_API_URL+"/uploadFichier/"+formdata;
        return this.http.post(url,formdata)
           .map(resp=>resp);
            
    }
    private errorHandler(error:Response){
        console.log('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on server Occured');
    }
   
}