import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientinfoService } from '../../../../../service/clientinfo.service'
import { ClienteModel, ClientesInfo } from '../../../../../Models/clientemodel'

const ELEMENT_DATA: ClientesInfo= {
    id_cliente: 0,
    nombre_usuario: "",
    nombre_completo: "",
    edad: 0,
    fecha_registro: "",
    hora_registro: "",
    fecha_nacimiento: "",
    email: "",
    tel: "",
    estatus: ""
}

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.scss']
})
export class PdvComponent implements OnInit {
  profileForm = new FormGroup({
    nombreUsuario: new FormControl('')
  });
  displayedColumns: string[] = ['nombre_usuario', 'nombre_completo'
  ,'fecha_registro', 'fecha_nacimiento', 'email', 'tel'];
  dataSource = ELEMENT_DATA;
  constructor(private ClienteService: ClientinfoService) { }
  nomUsuario = "";
  
  async buscarCliente(){
    this.nomUsuario = this.profileForm.get('nombreUsuario')!.value;
    var resp = await this.ClienteService.getCliente(this.nomUsuario);
    this.dataSource = resp;
    let getid = document.getElementById("ProfileData") as HTMLElement; 
    getid.style.visibility = "visible";
  }
  ngOnInit(): void {
  }

}
