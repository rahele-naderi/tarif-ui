import { Routes } from '@angular/router';
import { TarifListPageComponent } from './pages/tarif-list-page/tarif-list-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'tarif-list' },
    { path: 'tarif-list', component: TarifListPageComponent }
];
