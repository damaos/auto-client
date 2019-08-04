import { Component, OnInit} from '@angular/core';
import { CITIES } from './mocks/cities.mock';
import { CLIENTS } from './mocks/clients.mock';
import { DEALERS } from './mocks/dealers.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities = CITIES;
  clients = CLIENTS;
  dealers = DEALERS;

  ngOnInit() {
    // set cities, clients, dealers in storage
    const cliExist = localStorage.getItem('clients');

    localStorage.setItem('dealers', JSON.stringify(this.dealers));
    localStorage.setItem('cities', JSON.stringify(this.cities));

    if (cliExist == null || cliExist === undefined) {
      localStorage.setItem('clients', JSON.stringify(this.clients));
    }
  }
}
