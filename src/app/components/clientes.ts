export interface Cliente{
   id?: "",
    nome: "",
    email: "",
    telefone:number,
    endereco: {
      rua:"",
      numero: number,
      cidade: "",
      estado:"",
      cep: number}
}