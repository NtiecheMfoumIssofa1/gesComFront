import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
//import { MaterialModule } from '../../../app/material.module';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatFormFieldModule,
        
       
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationServive } from '../../../services/authentication.service';

const routes: Routes = [
    {path: '', component: LoginComponent},
  ];
@NgModule({
    imports: [
    MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatFormFieldModule,
      //  MaterialModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [   
        LoginComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthenticationServive
    ]
})
export class LoginModule {
}
