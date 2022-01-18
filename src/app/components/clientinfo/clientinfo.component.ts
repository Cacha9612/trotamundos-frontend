import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.scss']
})
export class ClientinfoComponent implements OnInit {

  queryId = '';
  constructor(private acivatedRoute: ActivatedRoute) {
    this.acivatedRoute.queryParams.subscribe( data => {
      this.queryId = data.id;
    })
   }

  ngOnInit(): void {
  }

}
