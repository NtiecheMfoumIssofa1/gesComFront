import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import {ListUtilisateursComponent} from './list-utilisateurs/list-utilisateurs.component'
import { EditUserComponent } from './edit-user/edit-user.component';
import { FamilleArticleComponent } from './famille-article/famille-article.component';
import { AddFamilleComponent } from './add-famille/add-famille.component';
import { EditFamilleArticleComponent } from './edit-famille-article/edit-famille-article.component';
import { TaxesComponent } from './taxes/taxes.component';
import { AddTaxesComponent } from './add-taxes/add-taxes.component';
const FormsRoutes: Routes = [
  //	{ path: 'reactive_forms', component: ReactiveFormsComponent },
    //{ path: 'template_forms', component: TemplateDrivenFormsComponent },
    { path: 'list-utilisateurs', component: ListUtilisateursComponent,data: { animation: 'list-utilisateurs' } },
    { path: 'edit-user/:id', component: EditUserComponent,data: { animation: 'edit-user' } },
    { path: 'famille-article', component: FamilleArticleComponent,data: { animation: 'famille-article' } },
    { path: 'add-famille', component: AddFamilleComponent,data: { animation: 'add-famille' } },
    { path: 'edit-famille-article/:idFamille', component:EditFamilleArticleComponent,data: { animation: 'edit-famille-article' } },
    { path: 'taxes', component:TaxesComponent,data: { animation: 'taxes' } },
   { path: 'add-taxes', component:AddTaxesComponent,data: { animation: 'add-taxes' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(FormsRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class FormsRouterModule {}