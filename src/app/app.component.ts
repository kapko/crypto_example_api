import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAdmin: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) {
    this.authService.setCredos();

    this.authService.updateAuth(localStorage.auth ? true : false);

    this.isAdmin = this.authService.isAdmin;
  }

}
