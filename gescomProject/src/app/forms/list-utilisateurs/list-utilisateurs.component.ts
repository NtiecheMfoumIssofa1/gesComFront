import { 
    Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild 
} from '@angular/core';

import { MatPaginator } from '@angular/material';
import { RegisterService } from '../../../services/registerService';
import { Router } from '@angular/router';
import { ResponsiveTableHelpers } from './helpers.data';
import { UserModel } from '../../../Model/UserModel';


@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.scss']
})
export class ListUtilisateursComponent implements OnInit {
    motCle:string="";
    currentPage:number=0;
    size:number=5;
    pages:Array<number>;

    displayedColumn = ['id', 'username', 'Name', 'E-mail','Authority','Function','Picture'];
	rows: any;
    showResponsiveTableCode;
    pageUser:any;
	@ViewChild(MatPaginator) paginator1: MatPaginator;
    pageLength = 0;
    pageSize = 15;
    helpers = ResponsiveTableHelpers;
    @Input() status;
    @Input() actionStatus;
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() view = new EventEmitter();
    @Output() page = new EventEmitter();
    @Output() sort = new EventEmitter();
    @Output() dup = new EventEmitter();
      constructor(private registerService:RegisterService,
                 private router:Router) {
   	}

    ngOnInit() {
        
       // this.findAllUsers();
       this.doSearch();
    }
	/*next(event) {
    this.pageUser = [];
    	for (var i= 1 * event.pageIndex * event.pageSize; i< event.pageSize+event.pageIndex*event.pageSize ;i++) {
            this.rows = [...this.rows,this.pageUser[i]];
        }
    }*/
   
    sortData(val){
    }

   /* findAllUsers(){
        this.registerService.getUser()
            .subscribe(data=>{
                this.pageUser=data;
                console.log(this.pageUser);
            },err=>{
                console.log(err);
                this.router.navigateByUrl('/auth/dashboard');
            })
    }*/

    doSearch(){
        this.registerService.getUserMc(this.motCle,this.currentPage,this.size)
            .subscribe(data=>{
                this.pageUser=data;
                this.pages= new Array(this.pageUser.totalPages); 
                console.log(data);
            },err=>{
                console.log(err);
                this.router.navigateByUrl('/auth/dashboard');
            });
    }
    chercher(){
        this.doSearch();
    }
    gotoPage(i:number){
        this.currentPage=i;
        this.doSearch();
      }
      deleteUser(user:UserModel){
            let confirm=window.confirm("Will you delete this user?")
            if(confirm==true){
              this.registerService.DeleteUser(user.id)
                .subscribe(data=>{
                    this.pageUser.content.splice(
                    this.pageUser.content.indexOf(user),1
                    );
                    alert("Delete User Successfull.....");
                    this.doSearch();
                },err=>{
                    console.log(err);
                })
          }
      }

      edituser(id:number){
          this.router.navigate(['/auth/forms/edit-user',id]);
          console.log(id);
      }

      newUser(){
          this.router.navigateByUrl('/auth/register');
      }

     
}
