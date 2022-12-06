import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
