import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BannerModule } from '@storybook/banner';
import { ButtonModule } from '@storybook/button';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BannerModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
