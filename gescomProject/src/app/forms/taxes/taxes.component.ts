
import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { ResponsiveTableHelpers } from './helpers.data';
import { Router } from '@angular/router';
import { TaxesService } from '../../../services/TaxesService';
import { TaxesModel } from '../../../Model/TaxesModel';
@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  displayedColumn = ['id', 'Taux'];
  showResponsiveTableCode;
  pageTaxe:any;

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
                private taxeService:TaxesService) {
   }

  ngOnInit() {
      
     
     this.doSearch();
  }

 
  sortData(val){
  }

 

  doSearch(){
      this.taxeService.getTaxes(this.currentPage,this.size)
          .subscribe(data=>{
            this.pageTaxe=data;
            this.pages= new Array(this.pageTaxe.totalPages);
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

    newTaxe(){
        this.router.navigateByUrl('/auth/forms/add-taxes');
    }
    deleteTaxe(t:TaxesModel){
        console.log(t);
        let confirm=window.confirm("Will you delete this Taxe?")
        if(confirm==true){
            this.taxeService.deleteTaxe(t.idTaxe)
                .subscribe(data=>{
                    this.pageTaxe.content.splice(
                        this.pageTaxe.content.indexOf(t),1
                    );
                    alert("Delete Taxes Successfull.....");
                    this.router.navigateByUrl('/auth/forms/taxes');
                },err=>{
                    alert("ERROR.....");
                    this.router.navigateByUrl('/auth/forms/taxes');
                })
        }
    }
  

}
