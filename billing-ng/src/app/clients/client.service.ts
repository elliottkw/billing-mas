import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Client } from './client';
import { CLIENTS } from './client.json';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlGetClients = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    // return of(CLIENTS);
    
    return this.http.get<Client[]>(this.urlGetClients).pipe(
      map(response => response as Client[])
    );
    
   // return this.http.get<Client[]>(this.urlGetClients);
  }
}
