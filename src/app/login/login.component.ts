import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(public authService: AuthService) {}

  login() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.login(user).subscribe((data)=>{
      console.log(data)
    })
  }
}
