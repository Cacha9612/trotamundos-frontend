
import { Component, OnInit } from '@angular/core';
import { HistoricocheckService } from '../historicocheck.service';  // Asegúrate de tener un servicio para manejar los checklists
import { HistoricoCheck } from '../historico.interface';  // Define una interfaz similar a la de los vehículos
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historicocheck',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historicocheck.component.html',
})
export class HistoricoCheckComponent {
  historicochecks: HistoricoCheck[] = [];
  loading = false;

  constructor(
    private historicocheckService: HistoricocheckService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cargarChecklists();
  }

  cargarChecklists(): void {
    this.loading = true;
    this.historicocheckService.getHistoricocheck().subscribe(
      (data: HistoricoCheck[]) => {
        this.historicochecks = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al cargar histórico', error);
        this.loading = false;
      }
    );
  }
}