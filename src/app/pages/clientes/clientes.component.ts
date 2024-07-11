import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private readonly API = 'http://localhost:3000/clientes'

  sidebarVisible: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
  ){}


  ngOnInit() {
  }

}
