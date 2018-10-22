import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', loadChildren: './app-main/app-main.module#AppMainModule' }
]