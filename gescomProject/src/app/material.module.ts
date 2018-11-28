import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatStepperModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatListModule
  
} from '@angular/material';
import{MatFileUploadModule} from'angular-material-fileupload';
@NgModule({
  imports: [
    MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatButtonToggleModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFileUploadModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    MatStepperModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    
    
  ],
  exports: [
      MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatButtonToggleModule,
       MatFormFieldModule,
       MatSelectModule,
       MatCheckboxModule,
      MatListModule,
    MatChipsModule,
    MatStepperModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
       
  ]
})
export class MaterialModule {}