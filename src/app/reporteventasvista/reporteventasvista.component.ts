import { Component, OnInit } from '@angular/core';
import { ReporteventasvistaService } from '../reporteventasvista.service';
import { ReporteVentasVista } from '../reporteventasvista.interface';  
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reporteventasvista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporteventasvista.component.html',
  styleUrls: ['./reporteventasvista.component.css'],
  
  
})
export class ReporteVentasVistaComponent {
  ReporteVentasVista: ReporteVentasVista[] = [];
  loading = false;

  constructor(
    private reporteVentasVistaService: ReporteventasvistaService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cargarReporte();
  }

  cargarReporte(): void {
    this.loading = true;
    this.reporteVentasVistaService.getReporte().subscribe(
      (data: ReporteVentasVista[]) => {
        this.ReporteVentasVista = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al cargar el reporte de ventas', error);
        this.loading = false;
      }
    );
  }
}