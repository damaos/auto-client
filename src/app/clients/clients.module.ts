import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { AngularMaterialModule } from 'app/angular-material/angular-material.module';
import { OverviewModule } from 'app/overview/overview.module';
import { ClientsService } from './services/clients.service';
import { ClientUXComponent } from './components/client-ux/client-ux.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsComponent, ClientUXComponent],
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
    ClientUXComponent
  ]
})
export class ClientsModule { }
