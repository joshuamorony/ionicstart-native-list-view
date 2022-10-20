import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import ListView from '../shared/plugins/list-view-plugin';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Native List View</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button (click)="launchListView()">Show list</ion-button>
    </ion-content>
  `,
})
export class HomeComponent {
  launchListView() {
    ListView.present({
      items: ['This', 'is', 'a'],
    });
  }
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeComponentModule {}
