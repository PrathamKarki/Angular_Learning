import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('../app/home/dashboard/dashboard').then(m => m.Dashboard),
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact)
    },
    {
        path: 'login',
        loadComponent: () => import('./home/login/login').then(m => m.Login)
    }
];