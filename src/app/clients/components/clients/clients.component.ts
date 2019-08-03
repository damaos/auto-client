import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'app/clients/services/clients.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';

@Component({
  selector: 'app-sales',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public clientsActives: any[];
  public clientsInactives: any[];

  constructor(
    public dialog: MatDialog,
    private clientsService: ClientsService) { }

  ngOnInit() {
    this.getClientsActives();
    this.getClientsInactives();
  }

  getClientsActives() {
    this.clientsService.getClientsActives().then(res => {
      if (res.length > 0) {
        this.clientsActives = res;
        console.log(this.clientsActives)
      }
    });
  }

  getClientsInactives() {
    this.clientsService.getClientsInactives().then(res => {
      if (res.length > 0) {
        this.clientsInactives = res;
        console.log(this.clientsInactives);
      }
    });
  }

  openDialogAddClient() {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '450px',
      data: {
        id: Math.floor((Math.random() * 1000 ) + 1),
        name: '',
        dealer: '',
        city: '',
        createDate: new Date(),
        status: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clientsService.addClient(result).then(() => {
        if (!this.clientsActives) {
          this.clientsActives = [];
          this.clientsActives.push(result);
        } else {
          this.clientsActives.push(result);
        }
      })
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
}
