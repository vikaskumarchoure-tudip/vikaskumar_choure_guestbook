import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from 'app/Login-Form/login.component';
import { RegisterComponent } from 'app/Register-Form/register.component';
import { DashboardComponent } from 'app/Dashboard-Form/dashboard.component';
import { ContactRoutes } from 'app/Routes/contact.routes';
import { SharedData } from 'app/Shared-Data/shareddata';
import { DashService } from 'app/DashService/dash.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ContactRoutes)
  ],
  providers: [SharedData,DashService],
  bootstrap: [AppComponent]
})
export class AppModule { }