import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  sidebarVisible: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
  ){}


out() {
  this.router.navigate(['/login']);
}
clientes() {
  this.router.navigate(['/clientes']);
}
inicio() {
  this.router.navigate(['/inicial']);
}
}
