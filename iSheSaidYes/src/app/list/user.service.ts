import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from '../auth/user';
import { SearchResponse } from './search-response'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  AUTH_SERVICE_ADDRESS: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) {

  }

  searchUsers(searchTerm: String): Observable<SearchResponse> {
    
  }
}
