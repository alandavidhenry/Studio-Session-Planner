import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Microphone } from 'src/app/models/microphone.model';
import { MicrophoneService } from 'src/app/services/microphone.service';

@Component({
  selector: 'app-add-microphone',
  templateUrl: './add-microphone.component.html',
  styleUrls: ['./add-microphone.component.scss']
})
export class AddMicrophoneComponent {

  microphone: Microphone = new Microphone();

  constructor(private router: Router,
              private microphoneService: MicrophoneService) {  }

  saveMicrophone(): void {
    this.microphoneService.create(this.microphone).then(() => {
      console.log('Created new item successfully!');
      this.router.navigate(['/equipment', 'microphones']);
    });
  }

}
