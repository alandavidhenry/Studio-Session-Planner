import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LoginComponent } from './user/login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MicrophoneDetailsComponent } from './equipment/microphone-details/microphone-details.component';
import { EditMicrophoneComponent } from './equipment/edit-microphone/edit-microphone.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'equipment/microphone-details', component: MicrophoneDetailsComponent },
  { path: 'equipment/edit-microphone', component: EditMicrophoneComponent },
  { path: 'user/user-profile', component: UserProfileComponent },
  { path: 'user/new-user', component: NewUserComponent },
  { path: 'user/login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
