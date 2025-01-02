import { Component, OnInit } from '@angular/core';
import { FlotillasService } from '../flotillas.service';
import { Flotillas } from '../flotillasinterface';  
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flotillas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flotillas.component.html',
})
export class FlotillasComponent {
  Flotilla: Flotillas[] = [];
  loading = false;

  constructor(
    private flotillasService: FlotillasService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cargarFlotilla();
  }

  cargarFlotilla(): void {
    this.loading = true;
    this.flotillasService.getFlotilla().subscribe(
      (data: Flotillas[]) => {
        this.Flotilla = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error al cargar la flotilla', error);
        this.loading = false;
      }
    );
  }
}