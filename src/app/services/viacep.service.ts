import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  private apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getAddress(cep: string): Observable<any> {
    const url = `${this.apiUrl}${cep}/json/`;
    return this.http.get<any>(url)
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar CEP:', error);
          throw error; // Tratar o erro como preferir
        })
      );
  }
}
