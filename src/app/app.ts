import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  random = "batataaaa";

  protected readonly title = signal('my-first-app');

  log(event:string){
    console.log('Evento: ', event)
  }
}
