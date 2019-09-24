import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelGridComponent } from './marvel-grid/marvel-grid.component';
import { MarvelMyFavouritesComponent } from './marvel-my-favourites/marvel-my-favourites.component';
import { MarvelCharacterDetailComponent } from './marvel-character-detail/marvel-character-detail.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LogInComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: MarvelGridComponent, canActivate: [AuthGuard] },
  { path: 'home/:pageNumber', component: MarvelGridComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: MarvelCharacterDetailComponent, canActivate: [AuthGuard] },
  { path: 'my-favourites', component: MarvelMyFavouritesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
