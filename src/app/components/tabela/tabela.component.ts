import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../clientes'; // Certifique-se de que o caminho está correto
import { ClientService } from 'src/app/services/client.service';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { CriarClienteComponent } from '../criar-cliente/criar-cliente.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  clients: Cliente[] = [];
  dataSource: MatTableDataSource<Cliente>; // Utilize MatTableDataSource para a fonte de dados
  private apiUrl = 'http://localhost:3000';

  displayedColumns: string[] = ['nome', 'email', 'telefone', 'acao'];

  constructor(
    private clientService: ClientService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Cliente>();
  }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    this.clientService.getClient()
      .subscribe(
        (response: Cliente[]) => {
          this.clients = response;
          this.dataSource.data = this.clients; // Atualiza os dados do MatTableDataSource
          console.log('Clientes carregados:', response);
        },
        (error) => {
          console.error('Erro ao buscar clientes:', error);
        }
      );
  }

  editClient(cliente: Cliente): void {
    const dialogRef = this.dialog.open(EditarClienteComponent, {
      width: '400px',
      data: cliente // Passa o cliente para o diálogo de edição
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('O diálogo foi fechado', result);
      // Atualize a lista de clientes se necessário após o fechamento do diálogo
    });
  }

  deleteClient(id: string): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.http.delete(`${this.apiUrl}/clientes/${id}`)
        .subscribe(
          () => {
            console.log(`Cliente com ID ${id} excluído com sucesso.`);
            this.fetchClients(); // Atualiza a lista de clientes após a exclusão
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
        this.fetchClients(); // Atualiza a lista de clientes após a criação
      }
    });
  }
}
