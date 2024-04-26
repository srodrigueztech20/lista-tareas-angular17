import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareasServicie = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasServicie.getTareas();
  }


  agregarTarea (){
    this._tareasServicie.agregarTarea(this.nuevaTarea); // agrego nueva tarea ingresada por input
    this.nuevaTarea =''; // borro el input
    this.listaTareas = this._tareasServicie.getTareas(); // seteo lista de tareas (actualizo información)
   }

   eliminarTareas (index:number){
    this._tareasServicie.eliminarTarea(index);
    this.listaTareas = this._tareasServicie.getTareas();
   }
}
