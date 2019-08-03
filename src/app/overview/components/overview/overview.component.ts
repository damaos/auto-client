import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public panelOpenState = false;
  public countQuestions = 0;
  public dataQuestions: any[];

  // kiero points
  public valueBar = 0;

  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }
}
