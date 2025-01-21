import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/Tarefas';
import { TaskService } from '../../services/task.service';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TasksItemComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']  // Corrigido de "styleUrl" para "styleUrls"
})
export class TasksComponent implements OnInit {

   tarefas: Tarefa[] = [];

   constructor(private taskService: TaskService) {}

   ngOnInit(): void {
     this.taskService.getTasks().subscribe({
       next: (data) => {
         this.tarefas = data;
         console.log(data);
       },
       error: (err) => {
         console.error('Erro ao buscar tarefa', err);
       }
     });
   }

   deleteTask(tarefa: Tarefa): void {
     this.taskService.deleteTask(tarefa).subscribe({
       next: () => {
         // Se a deleção for bem-sucedida, removemos a tarefa da lista
         this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
         alert('Tarefa deletada com sucesso!');
       },
       error: (err) => {
         console.error('Erro ao deletar a tarefa', err);
         alert('Ocorreu um erro ao tentar deletar a tarefa. Tente novamente mais tarde.');
       }
     });
   }
}
