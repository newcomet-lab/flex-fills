import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './components/auth/auth.module';
import { AccountModule } from './components/account/account.module';
import { MarketsModule } from './components/markets/markets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    AccountModule,
    MarketsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
