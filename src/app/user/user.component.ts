import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

export interface UsersData {
  username: string;
  name: string;
  phone: number;
}

const data: UsersData[] = [
  { username: 'admin', name: 'Kunal', phone: 9832687234 },
  { username: 'adminuser', name: 'Rakesh', phone: 8989726462 },
  { username: 'admin123', name: 'Riya', phone: 122223893 },
  { username: 'adminrights', name: 'Virat', phone: 989732744 },
  { username: 'Kunal', name: 'Kunal', phone: 9832687234 },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  displayedColumns = ['username', 'name', 'phone', 'action'];
  dataSource = [];
  username: any;
  @ViewChild(MatTable, { static: true }) mytable: MatTable<any>;
  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const uname = 'username';
      this.username = params[uname];
      console.log(this.username);
    });

    for (const item of data) {
      console.log(item);
      if (this.username === 'kunal') {
        if (item.username === 'Kunal') {
          this.dataSource.push(item);
        }
      } else {
        this.dataSource.push(item);
      }
    }
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row) {
    this.dataSource.push({
      username: row.username,
      phone: row.phone,
      name: row.name,
    });
    this.mytable.renderRows();
  }
  updateRowData(row) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.username === row.username) {
        (value.username = row.username),
          (value.phone = row.phone),
          (value.name = row.name);
      }

      return true;
    });
  }
  deleteRowData(row) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.username !== row.username;
    });
  }
}
