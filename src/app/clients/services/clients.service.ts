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
      return clientsActives;
    }
  }

  async getClientsInactives() {
    const clients = JSON.parse(localStorage.getItem('clients'))
    if (clients === null || clients === undefined) {
      return []
    } else {
      const clientsInactives = await clients.filter((cli => !cli.status))
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

  async updateClient(client: ClientModel) {
    const clients = await JSON.parse(localStorage.getItem('clients'));
    if (Array.isArray(clients)) {
      let clientUp = clients.filter(cli => cli.id === client.id)[0];
      const index = this.arrayObjectIndexOf(clients, clientUp);
      clientUp = client;
      clients[index] = clientUp;
      localStorage.setItem('clients', JSON.stringify(clients))
      return clientUp;
    }
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

  async enableClient(client: ClientModel) {
    const clients = await JSON.parse(localStorage.getItem('clients'));
    if (Array.isArray(clients)) {
      const clientUp = clients.filter(cli => cli.id === client.id)[0];
      const index = this.arrayObjectIndexOf(clients, clientUp);
      clientUp.status = true;
      clients[index] = clientUp;
      localStorage.setItem('clients', JSON.stringify(clients))
      return clientUp;
    }
  }

  async getCountClientsActive() {
    const clients = JSON.parse(localStorage.getItem('clients'));
    if (Array.isArray(clients)) {
      const clientsActives = await clients.filter((client) => client.status)
      const count = await clientsActives.length;
      return count;
    } else {
      return 0;
    }
  }

  async getCountClientsInactive() {
    const clients = JSON.parse(localStorage.getItem('clients'));
    if (Array.isArray(clients)) {
      const clientsInactives = await clients.filter((client) => !client.status)
      const count = await clientsInactives.length;
      return count;
    } else {
      return 0;
    }
  }

   getCities() {
    const cities = JSON.parse(localStorage.getItem('cities'));
    return cities;
  }

  getDealers() {
    const dealers = JSON.parse(localStorage.getItem('dealers'));
    return dealers;
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
