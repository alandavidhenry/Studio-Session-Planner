import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Microphone } from '../models/microphone.model';

@Injectable({
  providedIn: 'root'
})
export class MicrophoneService {

  private dbPath = '/microphones'

  microphonesRef: AngularFireList<Microphone>;

  constructor(private db: AngularFireDatabase) { 
    this.microphonesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Microphone> {
    return this.microphonesRef;
  }

  create(microphone: Microphone): any {
    return this.microphonesRef.push(microphone);
  }

  update(key: string, value: any): Promise<void> {
    return this.microphonesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.microphonesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.microphonesRef.remove();
  }
}
