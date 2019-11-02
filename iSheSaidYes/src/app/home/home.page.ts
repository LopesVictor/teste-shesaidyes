import { Component } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  AUTH_SERVICE_ADDRESS: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private storage: Storage) {

  }
}
