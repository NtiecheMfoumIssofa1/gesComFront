import { Component, OnInit } from '@angular/core';
import { TaxesModel } from '../../../Model/TaxesModel';
import { Router } from '@angular/router';
import { TaxesService } from '../../../services/TaxesService';

@Component({
  selector: 'app-add-taxes',
  templateUrl: './add-taxes.component.html',
  styleUrls: ['./add-taxes.component.scss']
})
export class AddTaxesComponent implements OnInit {
taxe:TaxesModel=new TaxesModel();
  constructor(private router:Router,
              private taxeService:TaxesService) { }

  ngOnInit() {
  }
  save(){
    this.taxeService.save(this.taxe)
      .subscribe(data=>{
        alert('Insert Successful');
        this.router.navigateByUrl('/auth/forms/taxes');
      },err=>{
        alert('ERROR!!');
        this.router.navigateByUrl('/auth/forms/taxes');
      });
  }
}
