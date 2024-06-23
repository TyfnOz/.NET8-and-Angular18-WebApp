import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, HomeComponent]
})
export class AppComponent implements OnInit{
  // to be able to use account controller of api -> /api/account/*
  private accountService = inject(AccountService);

  // when user connects to website again,
  // checks if user logged in previously or
  // user can auto-log in.
  ngOnInit(): void {
    this.setCurrentUser();
  }

  // on page refresh or visiting the website again
  // if jwt token is still valid, auto-logins the user again
  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}
