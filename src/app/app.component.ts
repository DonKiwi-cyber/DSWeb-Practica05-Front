import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DSWeb_Practica05';

  constructor(private router: Router, private authService: AuthService) {}  // Inject Router

  // Method to navigate to different routes
  navigateTo(route: string): void {
    this.router.navigate([route]);  // Use Router to navigate to the route
  }

  isAuthenticated(): boolean{
    return this.authService.isAuthenticated()
  }
}
