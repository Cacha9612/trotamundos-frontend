import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../../../../service/clientinfo.service'
import { ClienteModel } from '../../../../../Models/clientemodel'
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  [x: string]: any;
  

  constructor(
    private _snackBar: MatSnackBar,
    private ClienteService: ClientinfoService) {
    
   }
  profileForm = new FormGroup({
    nombreUsuario: new FormControl(''),
    nombreCompleto: new FormControl(''),
    codigoQr: new FormControl(''),
    edad: new FormControl(''),
    fechaNacimiento: new FormControl('')
  });

  ngOnInit(): void {
  }
  guardarCliente(){    
    const data: ClienteModel = {
      nombrecompleto: this.profileForm.get('nombreCompleto')!.value,
      nombreusuario: this.profileForm.get('nombreUsuario')!.value,
      codigoQr: this.profileForm.get('codigoQr')!.value,
      fechanacimiento: this.profileForm.get('fechaNacimiento')!.value,
      edad: this.profileForm.get('edad')!.value
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
