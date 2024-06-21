import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { AboutComponent } from './components/views/about/about.component';
import { ActivitiesComponent } from './components/views/activities/activities.component';
import { ContactComponent } from './components/views/contact/contact.component';

export const routes: Routes = [
    { path: 'inici', component: HomeComponent },
    { path: 'nosaltres', component: AboutComponent },
    { path: 'activitats', component: ActivitiesComponent },
    { path: 'contacte', component: ContactComponent },
    { path: '', redirectTo: 'inici', pathMatch: 'full' }
];