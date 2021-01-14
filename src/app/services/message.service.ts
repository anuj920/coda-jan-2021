import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  playerChanges = new BehaviorSubject(null);
  updatedplayer = this.playerChanges.asObservable();

  constructor() { }
}
