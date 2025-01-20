import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/Tarefas';
import { error } from 'console';
import { TaskService } from '../../services/task.service';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TasksItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

   tarefas: Tarefa [] = [];

   constructor(private taskService:TaskService){}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe( {
      next:(data) => {
        this.tarefas = data;
        console.log(data)
      },
      
        error:(err)=>{
          console.error('Erro ao buscar tarefa', err);
        }
      
    });
  }
}