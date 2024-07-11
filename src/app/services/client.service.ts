import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../components/clientes';
import { Endereco } from '../components/endereco';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClient(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes`);
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clientes/${id}`);
  }

  editarCliente(id: string, clienteAtualizado: Cliente): Observable<any> {
    const url = `${this.apiUrl}/clientes/${id}`;
    return this.http.put(url, clienteAtualizado);
  }

  criarCliente(cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/clientes`;
    return this.http.post(url, cliente);
  }

  buscarEnderecoPorCEP(cep: string): Observable<Endereco> {
    // Formata o CEP para remover caracteres não numéricos
    cep = cep.replace(/\D/g, '');

    // Verifica se o CEP possui 8 dígitos numéricos
    if (cep.length !== 8) {
      throw new Error('CEP inválido');
    }

    // Monta a URL de consulta
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Realiza a requisição GET para o ViaCEP
    return this.http.get<Endereco>(url);
  }
}
