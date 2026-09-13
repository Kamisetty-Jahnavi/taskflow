import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

  title= 'Design HomePage mockup';
  description = 'Create wireframes for the new landing page';
  priority = 'High';
}
