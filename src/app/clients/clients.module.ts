import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { OverviewModule } from 'app/overview/overview.module';
import { ClientsService } from './services/clients.service';
import { AddClientComponent } from './components/add-client/add-client.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsComponent, AddClientComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    OverviewModule,
    FormsModule
  ],
  providers: [
    ClientsService
  ],
  entryComponents: [
    AddClientComponent
  ]
})
export class ClientsModule { }
