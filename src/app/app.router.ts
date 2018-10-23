import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasboardComponent } from './dasboard/dasboard.component';
import { LoginComponent } from './login/login.component';

import { TemplateComponent } from './layout/template/template.component';
import { AuthGuard } from './auth.guard';


export const routes:  Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: TemplateComponent,
        children: [
            {
                path: 'dashboard',
                component: DasboardComponent,
                canActivate: [AuthGuard]
               
            }
        ]
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
