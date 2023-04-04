import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { GenderPipe } from './pipes/gender.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    GenderPipe
  ]
})
export class SharedModule { }
