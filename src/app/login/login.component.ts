import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  username: string;
  password: string;
  ngOnInit() {}

  login(uname: string, pws: string) {
    console.log(uname);
    const output = this.auth.checkusernamepaswd(uname, pws);
    if (output === true) {
      this.router.navigate(['user'], { queryParams: { username: uname } });
    } else if (output === 0) {
      this.router.navigate(['user'], { queryParams: { username: uname } });
    } else {
      alert('Invalid Credentials');
    }
  }
}
