import { Component, Input } from '@angular/core';

import { Tarefa } from '../../models/Tarefas';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {

  @Input() tarefa!:Tarefa;

  faTimes = faTimes

}
