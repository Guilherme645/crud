import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from 'src/app/services/client.service';
import { Observable } from 'rxjs';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { CriarClienteComponent } from '../criar-cliente/criar-cliente.component';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  clients: Client[] = [];
  private apiUrl = 'http://localhost:3000';
  dataSource: any;
  constructor(private clientService: ClientService, private http: HttpClient
    ,private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clientService.getClient()
      .subscribe(
        (response: Client[]) => {
          this.clients = response;
          console.log(response);
        },
        (error) => {
          console.error('Erro ao buscar clientes:', error);
        }
      );
  }
  fetchClients(): void {
    this.clientService.getClient()
      .subscribe(
        (response: Client[]) => {
          this.clients = response;
          console.log('Clientes carregados:', response);
        },
        (error) => {
          console.error('Erro ao buscar clientes:', error);
        }
      );
  }
  
  editClient(cliente: Client): void {
    const dialogRef = this.dialog.open(EditarClienteComponent, {
      width: '400px',
      data: cliente // Passa o cliente para o diálogo de edição
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('O diálogo foi fechado', result);
      // Aqui você pode atualizar a lista de clientes se necessário
    });
  }

  deleteClient(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.http.delete(`${this.apiUrl}/clientes/${id}`)
        .subscribe(
          () => {
            console.log(`Cliente com ID ${id} excluído com sucesso.`);
            this.fetchClients(); // Atualiza a lista de clientes
          },
          (error) => {
            console.error(`Erro ao excluir cliente com ID ${id}:`, error);
          }
        );
    }
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CriarClienteComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadClientes();
      }
    });
  }

  private loadClientes(): void {
    this.clientService.getClient().subscribe(clientes => {
      this.dataSource.data = clientes;
    });
  }

}

