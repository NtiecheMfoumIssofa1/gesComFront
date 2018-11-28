import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthenticationServive } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { UploadFileService } from '../../services/UploadFileService';

import { RegisterService } from '../../services/registerService';

import {ErrorStateMatcher} from '@angular/material/core';
import { UserModel } from '../../Model/UserModel';

//export class pour le controle des email
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Animal {
  name: string;
  sound: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:UserModel=new UserModel();
  pageUser:any;
  pageRole:any;
  idRole:number;
  roles:any;
 motCle:string="";
 currentPage:number=0;
 size:number=5;
 mode:number=1;//utilisé pour afficher les infos récupérées
 pages:Array<number>
 id:number;
  //donnée photo
  selectedFilImg: FileList;
  selectedFilPdf: FileList;
  currentFileUploadImg: File;
  progress: { percentage: number } = { percentage: 0 }
  fileUploads: Observable<string[]>;
  //au demarrage du formulaire, le boutons submit est désactivé
  submitted = false;
  hide;
  constructor(private route:Router,
              private uploadService:UploadFileService,
              private registerService:RegisterService,
              private fb: FormBuilder
              ) {
  }
 
  ngOnInit() {
    this.getRole();
  }


/**fin validation email */

  //controle la validité de l'email
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

    //select pour le role
    roleControl = new FormControl('', [Validators.required]);
  selectFilImg(event) {
    this.selectedFilImg = event.target.files;
  }
 

  uploadImg() {
    this.progress.percentage = 0;

    this.currentFileUploadImg = this.selectedFilImg.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUploadImg)
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log(event);
        console.log('File is completely uploaded!');
      }
    })

   this.selectedFilImg = undefined;
  }

  register(){
   this.submitted = true; 
   console.log(this.user.roles);
   console.log(this.user);
    if((this.user.password)==(this.user.confirpassword))
    {
      this.registerService.saveUser(this.user,this.currentFileUploadImg)
      .subscribe(data=>{
        console.log(data);
        this.route.navigateByUrl('/auth/forms/list-utilisateurs');
     },err=>{
       console.log(err);
        alert("Veullez vérifier vos identifiants et mot de passe");
        this.route.navigateByUrl('/auth/forms/list-utilisateurs');
      })
    }else{
      alert("les mots de passe doivent être identiques");
    }
   
  }
 /* addRoleToUser(){
    console.log(this.user.roles);
    console.log(this.user.email);
     this.registerService.addRoleToUser(this.user.email,this.user.roles)
      .subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      })
  }*/

 /* getUser(){
    this.registerService.getUser()
      .subscribe(data=>{
        this.pageUser=data;
        console.log(data);
      },err=>{
        this.route.navigateByUrl('/login');
      })
  }*/
  getRole(){
    this.registerService.getRole()
      .subscribe(data=>{
        this.pageRole=data;
        console.log(data);
      },err=>{
        this.route.navigateByUrl("/login");
      })
  }
  gotoPage(i:number){
    this.currentPage=i;
    //this.doSearch();
  }


}
