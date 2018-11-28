

import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';
import { SERVER_API_URL} from '../config/config';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    let headers = new Headers();
    headers.set('Accept', 'multipart/form-data');
    let options = new RequestOptions({ headers: headers });
    formdata.append('file', file);
 
    const req = new HttpRequest('POST',SERVER_API_URL+"/uploadFile", formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get("/getallfiles") 
              
  }
  

}
