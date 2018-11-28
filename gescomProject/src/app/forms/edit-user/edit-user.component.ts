import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../Model/UserModel';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadFileService } from '../../../services/UploadFileService';
import { RegisterService } from '../../../services/registerService';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../material-widgets/input/input.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user:UserModel=new UserModel();
  pageUser:any;
  pageRole:any;
  pageFonction:any;
 motCle:string="";
 idRole:number;
 idFonction:number;
 currentPage:number=0;
 size:number=5;
 mode:number=1;//utilisé pour afficher les infos récupérées
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
              public activedRoute:ActivatedRoute) 
              { 
                this.id=activedRoute.snapshot.params['id'];
              }

  ngOnInit() {
    this.getRole();
    this.getFonction();
    this.getUser();
  }

  getUser(){
    this.registerService.getUserId(this.id)
      .subscribe(data=>{
        this.pageUser=data;
        this.user=this.pageUser;
        this.currentFileUploadImg=this.pageUser.photo;
        console.log(this.user);
      },err=>{
        console.log(err);
      })
  }

  getRole(){
    this.registerService.getRole()
      .subscribe(data=>{
        this.pageRole=data;
        console.log(data);
      },err=>{
        this.route.navigateByUrl("/login");
      })
  }
  getFonction(){
    this.registerService.getFunction()
        .subscribe(data=>{
          this.pageFonction=data;
          console.log(this.pageFonction);
        },err=>{
          console.log(err);
        })
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

  updateUser(){
   this.submitted = true; 
   console.log(this.user);
      this.registerService.updateUser(this.user,this.currentFileUploadImg,this.id)
      .subscribe(data=>{
        console.log(data);
        this.route.navigateByUrl('/auth/forms/list-utilisateurs');
        alert("Update User Successfull!!!!");
     },err=>{
       console.log(err);
        alert("ERROR!!!");
        this.route.navigateByUrl('/auth/forms/list-utilisateurs');
      })
   
  }
  /*addRoleToUser(){
    console.log(this.user.roles);
    console.log(this.user.email);
     this.registerService.addRoleToUser(this.user.email,this.user.roles)
      .subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      })
  }*/
}
