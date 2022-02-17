import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'utama',
    loadChildren: () => import('./utama/utama.module').then( m => m.UtamaPageModule)
  },
  {
    path: 'guru',
    loadChildren: () => import('./guru/guru.module').then( m => m.GuruPageModule)
  },
  {
    path: 'scanguru/:gs_id/:kelas_id/:subjek_nama/:kelas_nama',
    loadChildren: () => import('./scanguru/scanguru.module').then( m => m.ScanguruPageModule)
  },
  {
    path: 'hadirguru',
    loadChildren: () => import('./hadirguru/hadirguru.module').then( m => m.HadirguruPageModule)
  },
  {
    path: 'pelajar',
    loadChildren: () => import('./pelajar/pelajar.module').then( m => m.PelajarPageModule)
  },
  {
    path: 'scanpelajar/:kelas_id/:kelas_nama/:guru_nama/:guru_id',
    loadChildren: () => import('./scanpelajar/scanpelajar.module').then( m => m.ScanpelajarPageModule)
  },
  {
    path: 'tidakhadir/:gs_id/:kelas_id/:subjek_nama/:kelas_nama',
    loadChildren: () => import('./tidakhadir/tidakhadir.module').then( m => m.TidakhadirPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
