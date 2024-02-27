import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: ListPageComponent }
];
