import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAdmin = new BehaviorSubject(false);

  public updateAuth(val: boolean): void {
    this.isAdmin.next(val);
  }

  public setCredos(): void {
    localStorage.setItem('credos', JSON.stringify({email: 'admin@gmail.com', password: 'admin'}));
  }
}
