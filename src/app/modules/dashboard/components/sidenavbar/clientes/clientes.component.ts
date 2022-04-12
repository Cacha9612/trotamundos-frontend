import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../../../../service/clientinfo.service'
import { ClienteModel, ClientesInfo } from '../../../../../Models/clientemodel'
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

const ELEMENT_DATA: ClientesInfo[] = []
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  [x: string]: any;
  
  displayedColumns: string[] = ['id_cliente', 'nombre_usuario', 'nombre_completo', 'edad'
  ,'fecha_registro', 'fecha_nacimiento', 'email', 'tel', 'estatus','editar', 'eliminar'];
  dataSource = ELEMENT_DATA;
  constructor(
    private _snackBar: MatSnackBar,
    private ClienteService: ClientinfoService) {
    
   }
  profileForm = new FormGroup({
    nombreUsuario: new FormControl(''),
    nombreCompleto: new FormControl(''),
    codigoQr: new FormControl(''),
    edad: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl('')
  });

  ngOnInit(): void {
    this.ClienteService.getclientes().subscribe(data => {
      this.dataSource = data;
    })
  }
  confirmarEliminar(id_cliente : number){
    let res = window.confirm('Estas seguro que quieres eliminar?')
    console.log(id_cliente)
    console.log(res)
  }
  guardarCliente(){    
    const data: ClienteModel = {
      nombrecompleto: this.profileForm.get('nombreCompleto')!.value,
      nombreusuario: this.profileForm.get('nombreUsuario')!.value,
      codigoQr: this.profileForm.get('codigoQr')!.value,
      fechanacimiento: this.profileForm.get('fechaNacimiento')!.value,
      edad: this.profileForm.get('edad')!.value,
      email: this.profileForm.get('email')!.value,
      tel: this.profileForm.get('tel')!.value
    }
    this.ClienteService.guardarCliente(data)
    .subscribe(ModeleoDeRespuesta  => {
      this.mensajeRespuesta(ModeleoDeRespuesta.Respuesta)
    }, response => {
      this.mensajeRespuesta(response.error.Respuesta)
    })
  }
  mensajeRespuesta(Respuesta: string) {
    this._snackBar.open(Respuesta, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
