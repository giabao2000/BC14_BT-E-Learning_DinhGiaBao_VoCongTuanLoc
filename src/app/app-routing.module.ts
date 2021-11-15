import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // HomeTemplate - localhost:4200
  {
    path: '',
    // loadChildren thì mới dùng dc lazy load
    // component thì ko dc
    // đặt "m" tượng trưng cho module
    loadChildren: () => import('./pages/home-template/home-template.module').then((m) => m.HomeTemplateModule),
  },
  // AdminTemplate - localhost:4200/admin
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-template/admin-template.module').then((m) => m.AdminTemplateModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
