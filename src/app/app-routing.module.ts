import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  LandingPage,
} from '@Willscotmobilemini/wsmm-mini-app-angular-sdk';

const routes: Routes = [

  {
    path: 'fullscreen',
    loadChildren: () =>
      import('./fullscreen/fullscreen.module').then(
        (m) => m.FullscreenPageModule
      ),
      canActivate: [AuthGuard],
  },

  {
    path: '',
    pathMatch: 'full',
    component: LandingPage,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}