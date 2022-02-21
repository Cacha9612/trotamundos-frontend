import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.scss']
})
export class PdvComponent implements OnInit {
  profileForm = new FormGroup({
    nombreUsuario: new FormControl('')
  });
  constructor() { }
  nomUsuario = "";
  
  buscarCliente(){
    this.nomUsuario = this.profileForm.get('nombreUsuario')!.value;
  }
  ngOnInit(): void {
  }

}
