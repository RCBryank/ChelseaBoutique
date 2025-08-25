import { Routes } from '@angular/router';
import { CreateItem } from './pages/create-item/create-item';
import { Home } from './pages/home/home';
import { Landingpage } from './pages/landingpage/landingpage';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
    {
        path: '',
        component: Landingpage
    },
    {
        path: 'registrarse',
        component: Signup
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'crear',
        component: CreateItem
    }
];
