import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [
    {
      id: 1,
      name: 'Elliott',
      firstname: 'Kings',
      email: 'resiel@gmail.com',
      creatAt: '2020-10-09'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
