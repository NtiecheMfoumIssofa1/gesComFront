import { Component, OnInit } from '@angular/core';
import { FamilleArticleModel } from '../../../Model/FamilleArticleModel';
import { Router } from '@angular/router';
import { FamilleArticleService } from '../../../services/FamilleArticleService';

@Component({
  selector: 'app-add-famille',
  templateUrl: './add-famille.component.html',
  styleUrls: ['./add-famille.component.scss']
})
export class AddFamilleComponent implements OnInit {

famille:FamilleArticleModel=new FamilleArticleModel();

  constructor(private router:Router,
              private familleService:FamilleArticleService) { }

  ngOnInit() {
  }
save(){
    this.familleService.saveFamille(this.famille)
      .subscribe(data=>{
        this.router.navigateByUrl('/auth/forms/famille-article');
        alert('Insert successfull');
      },err=>{
        this.router.navigateByUrl('/auth/forms/famille-article');
        alert('ERROR!!!');
      })
}
}
