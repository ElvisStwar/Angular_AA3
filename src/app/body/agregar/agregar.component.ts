import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  curso = ['JavaScript'];

  addCurso(nombrec:String){
    //alert(nombrec)

    this.curso.push(String(nombrec));
  }

}
