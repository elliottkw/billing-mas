import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Client } from './client';
import { CLIENTS } from './client.json';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  public getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
