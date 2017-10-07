import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './components/profile.component'
import { AppComponent }  from './app.component';
import { GithubService } from './services/github.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GithubService]
})
export class AppModule { }
