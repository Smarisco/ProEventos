import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  private http = inject(HttpClient);
  public eventos: any;  
  constructor(){};

  ngOnInit(): void{
    this.getEventos();
  }
  
  public getEventos(): void{
    this.http.get('https://localhost:5001/api/evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );

    this.eventos = [
      { Tema: 'Angular', Local: 'Belo Horizonte' },
      { Tema: 'Angular 11', Local: 'São Paulo' },
      { Tema: '.Net', Local: 'Campo Grande' }
    ];
  }
}
