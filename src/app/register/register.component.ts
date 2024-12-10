import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  passwordError: boolean = false;

  constructor(public authService: AuthService) {}

  register() {
    const user = { username: this.username, password: this.password };
    this.authService.register(user).subscribe((data) => {
      console.log(data);
    });
  }
}
