import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from './material/material.module';
import {  PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule
  ],
  exports: [
    MaterialModule,
    PipeModule
  ]

})
export class ProjectCommonModule { }
