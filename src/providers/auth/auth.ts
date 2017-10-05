import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {
	
  }
	loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
	  return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
	}
	logoutUser(): firebase.Promise<any> {
	  return this.afAuth.auth.signOut();
	}
	signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
	  return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
	}	
}
