import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../components/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  editarProduto(id: number, produtoAtualizado: Produtos) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${this.apiUrl}/produtos`);
  }

  createProduto(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(`${this.apiUrl}/produtos`, produto);
  }

  updateProduto(produto: Produtos): Observable<Produtos> {
    return this.http.put<Produtos>(`${this.apiUrl}/produtos/${produto.id}`, produto);
  }

  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/produtos/${id}`);
  }
}
