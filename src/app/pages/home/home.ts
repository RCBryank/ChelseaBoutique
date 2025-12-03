import { Component, computed, EventEmitter, inject, input, Input, model, Output } from '@angular/core';
import { Menu } from '../../sections/menu/menu';
import { Weatherforecast } from '../../weatherforecast';
import { RouterOutlet } from '@angular/router';
import { LayoutWebstore } from "../../layouts/layout-webstore/layout-webstore";
import { MenuhomepageItem } from "../../ui/menuhomepage-item/menuhomepage-item";
import { TestService } from '../../services/test-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';


@Component({
  selector: 'counter',
  template: '<div>(Esta propiedad solo puede ser modifica por el parent) Nombre: {{name()}} </div> <div> (Esta propiedad tiene two-way binding) El contador esta en: {{counter()}} <br> <button (click)="DecrementCounter()"> - </button> &nbsp; <button (click)="IncrementCounter()"> + </button> </div>',
  standalone: true
})
export class CounterComponent {
  name = input<string>('');
  counter = model<number>(0);
  label = computed(() => this.counter());

  IncrementCounter() {
    this.counter.update(oldvalue => oldvalue + 1);
  }

  DecrementCounter() {
    this.counter.update(oldvalue => oldvalue - 1);
  }
}

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, NgClass, CounterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  name: string = '';

  onChangeInputName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  /*
  testService = inject(TestService);

  fieldsFormSignUp = new FormGroup({
    Name: new FormControl<string>('', [Validators.required]),
    Email: new FormControl<string>('', [Validators.email, Validators.required])
  });

  constructor() {
    this.testService.getTestJSON().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {

      }
    })
  }

  onSubmit(e: Event) {
    e.preventDefault();

    console.log(this.fieldsFormSignUp.valid);
  }*/

  /*weatherforecastservice = inject(Weatherforecast);
  weathers: any[] = [];
  
    constructor() {
      this.weatherforecastservice.GetWeather().subscribe(data => { this.weathers = data; })
    }*/
}


/*
export class Task {
  id: number = 0;
  title: string = '';
  completed?: boolean = false
}

@Component({
  selector: 'taskitem',
  template: "<li class='my-2'><p class='inline-block'>{{task?.title}} &nbsp; <b>{{task?.completed?'Ya Completada':'Sin Completar'}}</b></p> &nbsp; <button class='bg-gray-400 p-2 cursor-pointer' (click)='onClick()'>{{task?.completed? 'Sin Completar':'Completada'}}</button><li>"
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  @Output() eventClick = new EventEmitter<number>();

  onClick() {
    this.eventClick.emit(this.task?.id);
  }
}

@Component({
  selector: 'tasklist',
  imports: [TaskItemComponent],
  template: "<ul>@for (task of listTasks; track $index) { <taskitem [task]='task' (eventClick)='listenerTaskItemClick($event)'></taskitem> }</ul>"
})
export class TaskListComponent {
  listTasks: Task[] | undefined;

  constructor() {
    this.listTasks = new Array<Task>();
    this.listTasks.push({ id: 1, "title": "Tarea 1" }, { id: 2, "title": "Tarea 2" });
  }

  listenerTaskItemClick(idtask: number) {
    const _item = this.listTasks?.find(x => x.id == idtask);
    if (_item != null)
      _item.completed = !_item.completed;
  }
}
*/
