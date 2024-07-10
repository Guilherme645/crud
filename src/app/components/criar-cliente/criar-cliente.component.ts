import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../clientes';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CriarClienteComponent>,
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      endereco: this.formBuilder.group({
        rua: [''],
        numero: [''],
        cidade: [''],
        estado: [''],
        cep: ['']
      })
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const novoCliente: Cliente = {
        id: undefined,
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

      this.clientService.criarCliente(novoCliente).subscribe(
        () => {
          this.dialogRef.close(novoCliente);
          window.location.reload(); // Recarrega a página
        },
        (error) => {
          console.error('Erro ao criar cliente:', error);
        }
      );
    } else {
      console.error('Formulário inválido.');
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
