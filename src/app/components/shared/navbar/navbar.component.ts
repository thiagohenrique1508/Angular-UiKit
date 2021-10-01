import { Component, OnInit } from '@angular/core';
import { Security } from './../../../utils/security.util';
import { User } from './../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public user: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = Security.getUser();
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }
}
