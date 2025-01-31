import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse'; // Importe o CollapseModule

@Component({
  selector: 'app-ap-nav',
  standalone: true,
  imports: [CommonModule, CollapseModule], // Adicione o CollapseModule aqui
  templateUrl: './ap-nav.component.html',
  styleUrls: ['./ap-nav.component.css'],
})
export class ApNavComponent {
  isCollapsed = true; // Controla o estado do colapso
}
