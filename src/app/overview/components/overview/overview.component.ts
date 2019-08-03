import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientsService } from 'app/clients/services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  countClientsActive = 0;
  countClientsInactive = 0;

  countDealersActive = 0;
  countDealersInactive = 0;


  constructor(
    private router: Router,
    public clientService: ClientsService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.clientService.getCountClientsActive().then((count) => this.countClientsActive = count);
    this.clientService.getCountClientsInactive().then((count) => this.countClientsInactive = count);
  }

  goToClients() {
    this.router.navigateByUrl('/clients');
  }
}
