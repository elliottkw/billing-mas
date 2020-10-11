import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './client.json';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  public getClients(): Client[] {
    return CLIENTS;
  }
}
