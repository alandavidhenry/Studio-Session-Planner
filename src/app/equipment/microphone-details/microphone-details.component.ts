import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Microphone } from 'src/app/models/microphone.model';
import { MicrophoneService } from 'src/app/services/microphone.service';

@Component({
  selector: 'app-microphone-details',
  templateUrl: './microphone-details.component.html',
  styleUrls: ['./microphone-details.component.scss']
})
export class MicrophoneDetailsComponent {
  @Input() microphone?: Microphone;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  currentMicrophone: Microphone = {
    key: '',
    make: '',
    model: '',
    type: '',
    polarPatterns: '',
    primaryUse: '',
    frequencyResponse: '',
    preattenuationPad: '',
    bassCutFilter: ''
  }

  ngOnChanges(): void {
    this.currentMicrophone = { ...this.microphone };
  }

}