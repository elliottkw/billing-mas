import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './client.json';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor() { }

  ngOnInit(): void {
    this.clients = CLIENTS;
  }

}
