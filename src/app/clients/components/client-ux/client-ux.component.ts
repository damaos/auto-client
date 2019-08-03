import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-client-ux',
  templateUrl: './client-ux.component.html',
  styleUrls: ['./client-ux.component.scss']
})
export class ClientUXComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validateDataClient() {
    for (const prop in this.data) {
      if (this.data[prop] === '') {
        return true;
      }
    }
    return false;
  }
}
