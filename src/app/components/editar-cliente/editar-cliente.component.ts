import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../clientes';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  form!: FormGroup; // Declarando explicitamente que form é do tipo FormGroup

  constructor(
    private dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      nome: [this.data.nome, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      telefone: [this.data.telefone, Validators.required],
      endereco: this.formBuilder.group({
        rua: [this.data.endereco?.rua],
        numero: [this.data.endereco?.numero],
        cidade: [this.data.endereco?.cidade],
        estado: [this.data.endereco?.estado],
        cep: [this.data.endereco?.cep]
      })
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const clienteAtualizado: Cliente = {
        id: this.data.id,
        nome: this.form.value.nome,
        email: this.form.value.email,
        telefone: this.form.value.telefone,
        endereco: {
          rua: this.form.value.endereco.rua,
          numero: this.form.value.endereco.numero,
          cidade: this.form.value.endereco.cidade,
          estado: this.form.value.endereco.estado,
          cep: this.form.value.endereco.cep
        }
      };

      if (clienteAtualizado.id) {
        this.clientService.editarCliente(clienteAtualizado.id, clienteAtualizado).subscribe(
            () => {
              this.dialogRef.close(clienteAtualizado);
            },
            (error) => {
              console.error('Erro ao editar cliente:', error);
            }
          );
    } else {
      console.error('ID do cliente não está definido.');
      // Tratamento para o caso em que clienteAtualizado.id é undefined
    }
  }
}
onClose(): void {
    this.dialogRef.close();
  }
}
