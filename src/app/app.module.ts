import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

/**
 * Services
 */
import { NavigationService } from "./services/navigation.service";
import { CssComponent } from './components/css/css.component';

/**
 * Route Providers
 */
import { routeProvider, routing } from "./routes";
import { DirectivesComponent } from './components/directives/directives.component';
import { ServicesComponent } from './components/services/services.component';
import { JqueryComponent } from './components/jquery/jquery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CssComponent,
    DirectivesComponent,
    ServicesComponent,
    JqueryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [routeProvider, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
