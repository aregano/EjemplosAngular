import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios:User[]=[
    new User (1, "Santi", "santi@voxespana.es", 42),
    new User (2, "Anagut", "ana_cebo19@voxespana.es", 23),
    new User (3, "Ricardo", "ricardo@voxespana.es", 23),
    new User (4, "El Caudillo", "eRcaudiLlHo@voxespana.es", 23),
      ]

  constructor() { }

  getUsuarios(): User[]{
    return this._usuarios;
  }
}
