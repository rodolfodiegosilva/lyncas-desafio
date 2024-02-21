import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/signin'
      },
      {
        path:'signin',
        component:GalleryComponent
      },
];
