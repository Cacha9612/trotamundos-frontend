import { Component, OnInit } from '@angular/core';
import { PromocionModel } from '../../../../../Models/clientemodel'
import { ClientinfoService } from '../../../../../service/clientinfo.service'


const ELEMENT_DATA: PromocionModel[] = [
];
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})

export class PromocionesComponent implements OnInit {
  displayedColumns: string[] = ['id_promocion', 'promociondescripcion', 'fecha_inicion', 'fecha_fin'
  ,'codigo_promocion', 'descripcion'];
  dataSource = ELEMENT_DATA;
  constructor( private api:ClientinfoService) { }

  ngOnInit(): void {
    this.api.getpromociones().subscribe(data =>{
      this.dataSource = data;
    })
  }

}
