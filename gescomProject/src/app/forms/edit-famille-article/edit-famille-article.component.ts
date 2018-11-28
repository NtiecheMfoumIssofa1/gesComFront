import { Component, OnInit } from '@angular/core';
import { FamilleArticleModel } from '../../../Model/FamilleArticleModel';
import { Router, ActivatedRoute } from '@angular/router';
import { FamilleArticleService } from '../../../services/FamilleArticleService';

@Component({
  selector: 'app-edit-famille-article',
  templateUrl: './edit-famille-article.component.html',
  styleUrls: ['./edit-famille-article.component.scss']
})
export class EditFamilleArticleComponent implements OnInit {
  famille:FamilleArticleModel=new FamilleArticleModel();
  pageFamille:any;
  id:number;
  constructor(private router:Router,
              private familleService:FamilleArticleService,
              private activeRoute:ActivatedRoute) 
              {
                this.id=activeRoute.snapshot.params['idFamille'];
               }

  ngOnInit() {
    this.getFamille();
      }
  getFamille(){
    this.familleService.getFamilleId(this.id)
        .subscribe(data=>{
          this.pageFamille=data;
          this.famille=this.pageFamille;
          console.log(this.famille);
        },err=>{
          this.router.navigateByUrl('/auth/forms/famille-article');
        alert('ERROR!!!');
        })
  }
  update(){
    this.familleService.update(this.famille,this.id)
        .subscribe(data=>{
          alert('Update Successful!!!');
          this.router.navigateByUrl('/auth/forms/famille-article');
        },err=>{
          this.router.navigateByUrl('/auth/forms/famille-article');
          alert('ERROR!!!');
        });
  }
}
