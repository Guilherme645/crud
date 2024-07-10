import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../components/clientes';

export interface Client {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: Endereco;
}

export interface Endereco {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
}



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clientes`);
  }
  deleteClient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clientes/${id}`);
  }
  editarCliente(id: string, clienteAtualizado: Cliente): Observable<any> {
    const url = `${this.apiUrl}/clientes/${id}`;
    return this.http.put(url, clienteAtualizado);
  }
   buscarPorId(id:number): Observable<Client>{
     const url= `${this.apiUrl}/${id}`
     return this.http.get<Client>(url)
   }
}
