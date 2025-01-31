import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-eventos',
  imports: [CommonModule, FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  private http = inject(HttpClient);
  public eventos: any;  
  widthImg: number = 200;
  marginImg: number= 50;
  mostrarImg: boolean = true;
  filtroLista: string = '';

  constructor(){};

  ngOnInit(): void{
    this.getEventos();
  }

  expandirImagem(): void{
    this.mostrarImg = !this.mostrarImg;
  }
  
  public getEventos(): void{
    this.http.get('https://localhost:5001/api/evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }
}
