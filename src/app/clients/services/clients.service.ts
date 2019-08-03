import { Injectable } from '@angular/core';
import { ClientModel } from '../models/clients/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }


  async getClientsActives() {
    const clients = JSON.parse(localStorage.getItem('clients'))
    if (clients === null || clients === undefined) {
      return []
    } else {
      const clientsActives = await clients.filter((cli => cli.status));
      console.log('clientsActives', clientsActives);
      return clientsActives;
    }
  }

  async getClientsInactives() {
    const clients = JSON.parse(localStorage.getItem('clients'))
    if (clients === null || clients === undefined) {
      return []
    } else {
      const clientsInactives = await clients.filter((cli => !cli.status))
      console.log('clientsInactives', clientsInactives)
      return clientsInactives;
    }
  }

  async addClient(client: ClientModel) {
    let clients = await JSON.parse(localStorage.getItem('clients'));
    if (Array.isArray(clients)) {
      await clients.push(client)
    } else {
      clients = [];
      await clients.push(client);
    }
    localStorage.setItem('clients', JSON.stringify(clients))
  }

  async disableClient(client: ClientModel) {
    const clients = await JSON.parse(localStorage.getItem('clients'));
    if (Array.isArray(clients)) {
      const clientUp = clients.filter(cli => cli.id === client.id)[0];
      const index = this.arrayObjectIndexOf(clients, clientUp);
      clientUp.status = false;
      clients[index] = clientUp;
      localStorage.setItem('clients', JSON.stringify(clients))
      return clientUp;
    }
  }

  // Get the index from array's objects
  public arrayObjectIndexOf(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === obj) {
        return i;
      }
    }
    return -1;
  }
}
