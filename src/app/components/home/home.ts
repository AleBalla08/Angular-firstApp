import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SubmitForm } from '../../services/submit-form';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent {
  private sendInfosService = inject(SubmitForm);
  mostrarTitulo = true; 

  @Input() myOutsideProp!: string
  @Output() emitter = new EventEmitter<string>();

  click(event: any) {
    this.emitter.emit("event");
    this.sendInfosService.sendInfos("teste teste");
  }
}
