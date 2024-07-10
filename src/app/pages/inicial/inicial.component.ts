import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent  {

private readonly API = 'http://localhost:3000/clientes'

  sidebarVisible: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
  ){}


}
