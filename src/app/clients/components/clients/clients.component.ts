import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'app/clients/services/clients.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientUXComponent } from '../client-ux/client-ux.component';
import { ClientModel } from 'app/clients/models/clients/clients.model';

@Component({
  selector: 'app-sales',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public clientsActives: any[];
  public clientsInactives: any[];

  public searchText: string;
  public searchTextOne: string;

  public cities: any[];
  public dealers: any[];

  public dealer: string;
  public dealerIn: string;

  public city: string;
  public cityIn: string;

  constructor(
    public dialog: MatDialog,
    private clientsService: ClientsService) { }

  ngOnInit() {
    this.cities = this.clientsService.getCities();
    this.dealers = this.clientsService.getDealers();
    this.getClientsActives();
    this.getClientsInactives();
  }

  getClientsActives() {
    this.clientsService.getClientsActives().then(res => {
      if (res.length > 0) {
        this.clientsActives = res;
      }
    });
  }

  getClientsInactives() {
    this.clientsService.getClientsInactives().then(res => {
      if (res.length > 0) {
        this.clientsInactives = res;
      }
    });
  }

  openDialogClient(client: ClientModel, inmed = 1, index) {
    const dialogRef = this.dialog.open(ClientUXComponent, {
      width: '450px',
      data: {
        module: inmed,
        data: {
          id: client ? client.id : Math.floor((Math.random() * 1000 ) + 1),
          name: client ? client.name : '',
          dealer: client ? client.dealer : '',
          city: client ? client.city : '',
          createDate: client ? client.createDate : new Date(),
          status: client ? client.status : true
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      switch (inmed) {
        case 1:
          if (result) {
            this.clientsService.addClient(result).then(() => {
              if (result !== null) {
                if (!this.clientsActives) {
                  this.clientsActives = [];
                  this.clientsActives.push(result);
                } else {
                  this.clientsActives.push(result);
                }
              };
            })
          }
          break;

        case 2:
          if (result) {
            this.clientsService.updateClient(result).then(() => {
              if (result !== null) {
                if (result.status) {
                  this.clientsActives[index] = result;
                } else {
                  this.clientsInactives[index] = result;
                }
              };
            })
          }
          break;
        case 3:
          break;
      }
    });
  }

  disableClient(index, client) {
    this.clientsService.disableClient(client).then((cli) => {
      this.clientsActives.splice(index, 1);
      if (!this.clientsInactives) {
        this.clientsInactives = [];
        this.clientsInactives.push(cli);
      } else {
        this.clientsInactives.push(cli);
      }
    })
  }

  enableClient(index, client) {
    this.clientsService.enableClient(client).then((cli) => {
      this.clientsInactives.splice(index, 1);
      if (!this.clientsActives) {
        this.clientsActives = [];
        this.clientsActives.push(cli);
      } else {
        this.clientsActives.push(cli);
      }
    })
  }
}
