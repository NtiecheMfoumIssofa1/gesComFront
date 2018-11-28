import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { ResponsiveTableHelpers } from './helpers.data';

import { Router } from '@angular/router';
import { FamilleArticleService } from '../../../services/FamilleArticleService';
import { FamilleArticleModel } from '../../../Model/FamilleArticleModel';

@Component({
  selector: 'app-famille-article',
  templateUrl: './famille-article.component.html',
  styleUrls: ['./famille-article.component.scss']
})
export class FamilleArticleComponent implements OnInit {
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  displayedColumn = ['id', 'Libelle'];
  showResponsiveTableCode;
  pageCategorie:any;

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
    constructor( private router:Router,
                 private familleService:FamilleArticleService) {
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
      this.familleService.getFamille(this.motCle,this.currentPage,this.size)
          .subscribe(data=>{
            this.pageCategorie=data;
            this.pages= new Array(this.pageCategorie.totalPages);
            console.log(data);
          },err=>{
            this.router.navigateByUrl('/auth/dashboard')
          })
  }
  chercher(){
      this.doSearch();
  }
  gotoPage(i:number){
      this.currentPage=i;
      this.doSearch();
    }

    editCat(id:number){
        this.router.navigate(['/auth/forms/edit-famille-article',id]);
        console.log(id);
    }

    newCat(){
        this.router.navigateByUrl('/auth/forms/add-famille');
    }
    deletecat(f:FamilleArticleModel){
        let confirm=window.confirm("Will you delete this Famille?")
        if(confirm==true){
            this.familleService.deleteFamille(f.idFamille)
                .subscribe(data=>{
                    this.pageCategorie.content.splice(
                        this.pageCategorie.content.indexOf(f),1
                    );
                    alert("Delete Famille Successfull.....");
                    this.router.navigateByUrl('/auth/forms/famille-article');
                },err=>{
                    alert("ERROR.....");
                    this.router.navigateByUrl('/auth/forms/famille-article');
                })
        }
    }
  
   
}
