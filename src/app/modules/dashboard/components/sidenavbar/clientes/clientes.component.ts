import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../../../../service/clientinfo.service';
import { ClienteModel, ClientesInfo } from '../../../../../Models/clientemodel';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabChangeEvent } from '@angular/material/tabs';

const ELEMENT_DATA: ClientesInfo[] = [];
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  [x: string]: any;
  selectedIndex = 0;
  displayedColumns: string[] = [
    'id_cliente',
    'nombre_usuario',
    'nombre_completo',
    'edad',
    'fecha_registro',
    'fecha_nacimiento',
    'email',
    'tel',
    'estatus',
    'editar',
    'eliminar',
  ];
  dataSource = ELEMENT_DATA;
  clienteActual: ClientesInfo;
  constructor(
    private _snackBar: MatSnackBar,
    private ClienteService: ClientinfoService
  ) {}
  profileForm = new FormGroup({
    nombreUsuario: new FormControl(''),
    nombreCompleto: new FormControl(''),
    codigoQr: new FormControl(''),
    edad: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
  });

  ngOnInit(): void {
    this.ClienteService.getclientes().subscribe((data) => {
      this.dataSource = data;
      for (const iterator of this.dataSource) {
        iterator.contador = this.dataSource.indexOf(iterator) + 1;
      }
    });
   
  }
  confirmarEliminar(id_cliente: number) {
    let res = window.confirm('Estas seguro que quieres eliminar?');
    const data: ClienteModel = {
      nombrecompleto: '',
      nombreusuario: '',
      codigoQr: '',
      fechanacimiento: '',
      edad: 0,
      email: '',
      tel: '',
      id_cliente : id_cliente
    };
    if (res) {
      this.ClienteService.eliminarCliente(data).subscribe(
        (ModeleoDeRespuesta) => {
          this.mensajeRespuesta(ModeleoDeRespuesta.Respuesta);
          this.ngOnInit()

        },
        (response) => {
          this.mensajeRespuesta(response.error.Respuesta);
        }
      );
    }
  }
  editarCliente(id_cliente: number) {
    this.selectedIndex = 2;
    for (const iterator of this.dataSource) {
      if ((iterator.id_cliente = id_cliente)) {
        this.clienteActual = iterator;
      }
    }
    this.profileForm
      .get('nombreCompleto')
      ?.setValue(this.clienteActual.nombre_completo);
    this.profileForm
      .get('nombreUsuario')
      ?.setValue(this.clienteActual.nombre_usuario);
    this.profileForm.get('codigoQr')?.setValue(this.clienteActual.qr);
    this.profileForm
      .get('fechaNacimiento')
      ?.setValue(this.clienteActual.fecha_nacimiento);
    this.profileForm.get('edad')?.setValue(this.clienteActual.edad);
    this.profileForm.get('email')?.setValue(this.clienteActual.email);
    this.profileForm.get('tel')?.setValue(this.clienteActual.tel);
  }

  guardarCliente(id: number) {
    const data: ClienteModel = {
      nombrecompleto: this.profileForm.get('nombreCompleto')!.value,
      nombreusuario: this.profileForm.get('nombreUsuario')!.value,
      codigoQr: this.profileForm.get('codigoQr')!.value,
      fechanacimiento: this.profileForm.get('fechaNacimiento')!.value,
      edad: this.profileForm.get('edad')!.value,
      email: this.profileForm.get('email')!.value,
      tel: this.profileForm.get('tel')!.value,
      id_cliente: this.clienteActual.id_cliente
    };

    if (id == 1) {
      this.ClienteService.guardarCliente(data).subscribe(
        (ModeleoDeRespuesta) => {
          this.mensajeRespuesta(ModeleoDeRespuesta.Respuesta);
          this.ngOnInit()
        },
        (response) => {
          this.mensajeRespuesta(response.error.Respuesta);
        }
      );
    } else if (id == 2) {
      this.ClienteService.editarCliente(data).subscribe(
        (ModeleoDeRespuesta) => {
          this.ngOnInit()
          this.mensajeRespuesta(ModeleoDeRespuesta.Respuesta);
        },
        (response) => {
          this.mensajeRespuesta(response.error.Respuesta);
        }
      );
    }
    this.profileForm.reset();
  }
  mensajeRespuesta(Respuesta: string) {
    this._snackBar.open(Respuesta, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (this.selectedIndex != 2) {
      this.profileForm.reset();
    }
  };
}
