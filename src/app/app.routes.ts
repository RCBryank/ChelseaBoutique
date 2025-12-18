import { CanActivateFn, Router, RouterModule, Routes, UrlTree } from '@angular/router';
import { CreateItem } from './pages/create-item/create-item';
import { Home } from './pages/home/home';
import { Landingpage } from './pages/landingpage/landingpage';
import { Signup } from './pages/signup/signup';
import { Homepage } from './pages/homepage/homepage';
import { Profilepage } from './pages/profilepage/profilepage';
import { NgModule } from '@angular/core';
import { HeroResolver } from './resolvers/getwebuserprofileinfo';
import { authenticatedGuard } from './guards/authenticated-guard';


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
        component: Homepage
    },
    {
        path: 'crear',
        component: CreateItem
    },
    {
        path: 'perfil',
        component: Profilepage,
        canActivate: [authenticatedGuard],
        resolve: {
            data: HeroResolver
        }
    },
    {
        path: 'test',
        component: Home
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
