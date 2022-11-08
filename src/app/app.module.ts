import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationModule} from './modules/authentication/authentication.module'
import {SharedModule} from './modules/shared/shared.module'
import { FormsModule } from '@angular/forms';
import { MusicModule } from './modules/music/music.module';
import { HomeComponent } from './modules/home/home.component';

const appRoutes: Routes =[
  {
    path: '',
    redirectTo: '/music/top',
    pathMatch: 'full'
  },
  {
    
    path:'homepage',
    component: HomeComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MusicModule,
    SharedModule,
    AuthenticationModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
