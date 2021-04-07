import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/guards/guards.guard';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./_auth/auth.module').then(m => m.AuthModule)},
  { path: 'home', loadChildren: () => import('./app-admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] ,canLoad: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
