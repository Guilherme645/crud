// excluir-cliente.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
})
export class ExcluirClienteComponent {
  constructor(
    public dialogRef: MatDialogRef<ExcluirClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id:string}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

