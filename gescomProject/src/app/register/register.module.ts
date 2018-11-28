import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from '../../services/UploadFileService';
import { RegisterService } from '../../services/registerService';
import {MaterialModule} from '../material.module';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
const routes: Routes = [
{path: '', component: RegisterComponent},
];
@NgModule({
imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule.forChild(routes)
],
declarations: [   
    RegisterComponent
],
exports: [
    RouterModule
],
providers: [
    UploadFileService,RegisterService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}//ajouter pour l'email

]
})
export class RegisterModule { }
