import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientsService } from 'app/clients/services/clients.service';

@Component({
  selector: 'app-client-ux',
  templateUrl: './client-ux.component.html',
  styleUrls: ['./client-ux.component.scss']
})
export class ClientUXComponent implements OnInit {
  title: string;
  cities: any[];
  dealers: any[];

  constructor(
    private clientsService: ClientsService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this.cities = this.clientsService.getCities();
    this.dealers = this.clientsService.getDealers();

    switch (this.data.module) {
      case 1:
        this.title = 'Agregar  cliente'
        break;

      case 2:
        this.title = 'Modificar  cliente'
        break;

      case 3:
        this.title = 'Detalle  cliente'
        break;
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validateDataClient() {
    for (const prop in this.data.data) {
      if (this.data.data[prop] === '') {
        return true;
      }
    }
    return false;
  }
}
