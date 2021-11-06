import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import {MachinesComponent} from './components/machines/machines.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'snacks', component: SnacksComponent },
    { path: 'machines', component: MachinesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
