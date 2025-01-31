import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from "./eventos/eventos.component";
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";
import { ApNavComponent } from "./ap-nav/ap-nav.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventosComponent, PalestrantesComponent, ApNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProEventos-APP';
}
