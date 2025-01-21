import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tarefa } from '../../models/Tarefas';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {

  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() OnToggleConcluido = new EventEmitter<Tarefa>();


  faTimes = faTimes

  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: Tarefa){
    this.OnToggleConcluido.emit(tarefa);
  }

}
