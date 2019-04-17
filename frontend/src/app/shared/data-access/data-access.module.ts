import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Firebase
    AngularFirestoreModule
  ]
})
export class DataAccessModule { }
