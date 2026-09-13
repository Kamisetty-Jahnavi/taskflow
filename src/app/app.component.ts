import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardComponent } from './task-card/task-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskflow';
}
