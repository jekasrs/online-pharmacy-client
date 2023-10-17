import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Task } from "./task/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pro-pill-front';

  task: Task;

  constructor(private http: HttpClient) {
    this.http.get<Task>("http://localhost:8080/task").subscribe(result => {
      this.task = result;
      console.log(this.task);
    });

  }
}
