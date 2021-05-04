import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import WaiterInterface from '../interfaces/waiter.interface';

@Injectable({
  providedIn: 'root'
})
export class WaitersService {

  constructor(private http: HttpClient, private r: Router) { }

  loggedWaiter!: WaiterInterface
  baseUrl: string = "http://localhost:1000/waiters"

  isLoggedIn() {
    return !!this.loggedWaiter?.name
  }

  login(body: any) {
    return this.http.post(this.baseUrl + '/login', body, {
      headers: {'Content-Type': 'application/json'  }
    })
  }

  register(body: any) {
    return this.http.post(this.baseUrl + '/register', body, {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
