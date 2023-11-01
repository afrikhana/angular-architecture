import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './home/features/features.component';
import { ClientComponent } from './client/client.component';
import { AssetsComponent } from './assets/assets.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
      HomeComponent,
      FeaturesComponent,
      ClientComponent,
      AssetsComponent,
      SharedComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }