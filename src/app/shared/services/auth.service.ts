import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public ngZone: NgZone,
    private afs: AngularFirestore
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  SignUp(email, password) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.SendVerificationEmail();
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  SendVerificationEmail() {
    return this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    console.log('singin in');
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  SignOut() {
    this.afAuth.auth.signOut().then(result =>
      this.ngZone.run(() => {
        this.router.navigate(['login']);
      })
    );
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.id}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }
}
