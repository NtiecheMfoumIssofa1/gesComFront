import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRouterModule } from './forms.router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material.module';
import {ListUtilisateursComponent} from './list-utilisateurs/list-utilisateurs.component';
import { FormsModule }   from '@angular/forms';
import { RegisterService } from '../../services/registerService';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UploadFileService } from '../../services/UploadFileService';
import { FamilleArticleComponent } from './famille-article/famille-article.component';
import { FamilleArticleService } from '../../services/FamilleArticleService';
import { AddFamilleComponent } from './add-famille/add-famille.component';
import { EditFamilleArticleComponent } from './edit-famille-article/edit-famille-article.component';
import { TaxesComponent } from './taxes/taxes.component';
import { TaxesService } from '../../services/TaxesService';
import { AddTaxesComponent } from './add-taxes/add-taxes.component';

@NgModule({
	imports: [
		CommonModule,
		FormsRouterModule,
		FlexLayoutModule,
		 ReactiveFormsModule,
		 FormsModule,
		 MaterialModule,
		 
	],
	declarations: 
	 [
		ReactiveFormsComponent, 
		TemplateDrivenFormsComponent,
		ListUtilisateursComponent,
		EditUserComponent,
		FamilleArticleComponent,
		AddFamilleComponent,
		EditFamilleArticleComponent,
		TaxesComponent,
		AddTaxesComponent
	],
	providers: [
		RegisterService,UploadFileService,FamilleArticleService,TaxesService
	]
})
export class FormModule { }
