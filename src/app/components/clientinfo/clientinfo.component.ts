import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface DatosCliente {
  idVisita: number;
  infoVisita: string;
}

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.scss'],
})
export class ClientinfoComponent implements OnInit {
  miArray: DatosCliente[] = [
    { idVisita: 1, infoVisita: '2022-01-01' },
    { idVisita: 2, infoVisita: '2022-01-02' },
    { idVisita: 3, infoVisita: '2022-01-03' },
  ];
  mostrar: boolean = true;
  queryId = '';
  infoVisita: string = '';
  isSameId:string = '';
  constructor(private acivatedRoute: ActivatedRoute) {
    this.acivatedRoute.queryParams.subscribe((data) => {
      this.queryId = data.id;
    });
  }

  ngOnInit(): void {
    this.rellenarDivs();
  }
  showVisitInfo(event: any) {
    console.log(event.target.id);
    let id = event.target.id;
    console.log(this.miArray);
    var found = this.miArray.find(function (element){
      return element.idVisita === +id;
    })
    console.log(found);
    this.infoVisita = found?.infoVisita!;
    let idinfo = document.getElementById('dato1');

    if(this.isSameId === id){
      this.mostrar ? this.mostrardiv() : this.ocultarDiv();
    }
    else{
      this.mostrardiv()
    }
    this.isSameId = id;
  }
  mostrardiv() {
    let idinfo = document.getElementById('dato1');

    idinfo?.classList.remove('ocultar');
    this.mostrar = false;
  }
  ocultarDiv() {
    let idinfo = document.getElementById('dato1');
    idinfo?.classList.add('ocultar');
    this.mostrar = true;
  }
  rellenarDivs(){
    for (const iterator of this.miArray) {
      document.getElementById(String(iterator.idVisita))?.classList.add('rellenar');
    }
}
}
