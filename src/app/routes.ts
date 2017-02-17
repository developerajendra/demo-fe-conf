import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CssComponent } from './components/css/css.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ServicesComponent } from './components/services/services.component';
import { JqueryComponent } from './components/jquery/jquery.component';




let appRouter: Routes = [
    { path: '', component: HomeComponent },
    { path: 'css', component: CssComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'jquery', component: JqueryComponent }

]

export const routeProvider: any = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);