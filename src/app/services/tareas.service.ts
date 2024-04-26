import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';

  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTarea(tarea:string){
    const tareas = this.getTareas();
    tareas.push(tarea); // agrego una nueva tarea
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); // se vuelve a setear con la nueva tarea (se borra lo anterior y se pone algo nuevo)
  } 

  eliminarTarea(index:number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1); //se saca la que dice el indicie y sólo se saca 1 (index, 1)
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)) // se setea con las tareas que quedan

  }


  

}
