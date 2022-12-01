import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';



@NgModule({
  declarations: [
    EditarCidadeComponent,
    InserirCidadeComponent,
    ListarCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EstadoModule { }
