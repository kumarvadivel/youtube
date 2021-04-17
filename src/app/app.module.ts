import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HeaderComponent } from './components/main/header/header.component';
import { SidenavComponent } from './components/main/sidenav/sidenav.component';
import { BodyComponent } from './components/main/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HeaderComponent,
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
