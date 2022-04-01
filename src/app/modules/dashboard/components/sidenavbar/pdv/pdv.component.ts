import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientinfoService } from '../../../../../service/clientinfo.service'
import { UsuariosInfo, ClientesInfo, ClienteVisita } from '../../../../../Models/clientemodel'
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PromocionModel } from '../../../../../Models/clientemodel'

const PromoData: PromocionModel[] = [
];
const clienteVisita: ClienteVisita={
    idCliente: 0,
    fechaRegistro: '',
    idUsuarioAtencion: 0,
    idCodigoPromocion: 0,
    comentarios: '',
    servicio: '',
    total: 0,
}
const UserInfo: UsuariosInfo[]=[]
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
  myControl = new FormControl();
  options: string[] = ['Irasema', 'Donnet'];
  filteredOptions: Observable<string[]>;

  profileForm = new FormGroup({
    nombreUsuario: new FormControl(''),
    idpromo: new FormControl(''),
    iduser: new FormControl(''),
    fechaVisita: new FormControl(''),
    comentarios: new FormControl(''),
    servicios: new FormControl(''),
    total: new FormControl('')
  });
  displayedColumns: string[] = ['nombre_usuario', 'nombre_completo'
  ,'fecha_registro', 'fecha_nacimiento', 'email', 'tel'];
  dataSource = ELEMENT_DATA;
  promodata_ = PromoData
  userinf = UserInfo
  clienteVisit = clienteVisita
  constructor(private ClienteService: ClientinfoService, private api:ClientinfoService) { }
  nomUsuario = "";
  

  guardarVisita(){
    this.clienteVisit.idCliente = this.dataSource.id_cliente
    this.clienteVisit.idCodigoPromocion = this.profileForm.get('idpromo')?.value
    this.clienteVisit.idUsuarioAtencion = this.profileForm.get('iduser')?.value
    this.clienteVisit.fechaRegistro = this.profileForm.get('fechaVisita')?.value
    this.clienteVisit.comentarios = this.profileForm.get('comentarios')?.value
    this.clienteVisit.servicio = this.profileForm.get('servicios')?.value
    this.clienteVisit.total = this.profileForm.get('total')?.value
    console.log(this.clienteVisit)

    this.profileForm.reset();
  }
  async buscarCliente(){
    this.nomUsuario = this.profileForm.get('nombreUsuario')!.value;
    var resp = await this.ClienteService.getCliente(this.nomUsuario);
    this.dataSource = resp;
    let getid = document.getElementById("ProfileData") as HTMLElement; 
    getid.style.visibility = "visible";
  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this.api.getpromociones().subscribe(data =>{
      this.promodata_ = data;
    })

    this.api.getUsersInfo().subscribe(data =>{
      this.userinf = data;
    })
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
