import { Component } from '@angular/core';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  faFolderPlus = faFolderPlus;
  faFolderOpen = faFolderOpen;
  faMicrophone = faMicrophone;

}
