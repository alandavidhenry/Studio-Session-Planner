import { Component, OnInit } from '@angular/core';
import { MicrophoneService } from 'src/app/services/microphone.service';
import { Microphone } from 'src/app/models/microphone.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-microphone-list',
  templateUrl: './microphone-list.component.html',
  styleUrls: ['./microphone-list.component.scss']
})
export class MicrophoneListComponent implements OnInit {

  microphones?: Microphone[];
  currentMicrophone?: Microphone;
  currentIndex = -1;

  constructor(private microphoneService: MicrophoneService) {}

  ngOnInit(): void {
    this.retrieveMicrophones();
  }

  refreshList(): void {
    this.currentMicrophone = undefined;
    this.currentIndex = -1;
    this.retrieveMicrophones();
  }

  retrieveMicrophones(): void {
    this.microphoneService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.microphones = data;
    });
  }

  setActiveMicrophone(microphone: Microphone, index: number): void {
    this.currentMicrophone = microphone;
    this.currentIndex = index;
  }


}
