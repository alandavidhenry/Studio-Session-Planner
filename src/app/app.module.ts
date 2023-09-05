import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditMicrophoneComponent } from './equipment/edit-microphone/edit-microphone.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MicrophoneDetailsComponent } from './equipment/microphone-details/microphone-details.component';
import { MicrophoneListComponent } from './equipment/microphone-list/microphone-list.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './user/login/login.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AddMicrophoneComponent } from './equipment/add-microphone/add-microphone.component';


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
    MicrophoneListComponent,
    MicrophoneDetailsComponent,
    EditMicrophoneComponent,
    AddMicrophoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
