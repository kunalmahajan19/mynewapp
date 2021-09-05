import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface UsersData {
  username: string;
  name: string;
  phone: number;
}

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'],
})
export class DialogboxComponent implements OnInit {
  action: string;
  localData: any;
  username: any;

  constructor(
    public dialogRef: MatDialogRef<DialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData
  ) {
    console.log(data);
    this.localData = { ...data };
    this.action = this.localData.action;
    this.username = this.localData.username;
  }
  ngOnInit(): void {}

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.localData });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
