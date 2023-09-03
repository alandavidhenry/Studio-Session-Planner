import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './user/login/login.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MicrophonesComponent } from './equipment/microphones/microphones.component';
import { MicrophoneDetailsComponent } from './equipment/microphone-details/microphone-details.component';
import { EditMicrophoneComponent } from './equipment/edit-microphone/edit-microphone.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EquipmentComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent,
    UserProfileComponent,
    MicrophonesComponent,
    MicrophoneDetailsComponent,
    EditMicrophoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
