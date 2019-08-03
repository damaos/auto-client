import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
})
export class OverviewModule { }
