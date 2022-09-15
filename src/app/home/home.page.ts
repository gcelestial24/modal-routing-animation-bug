import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController,
  ) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalBaseComponent,
      componentProps: {
        rootPage: ModalContentComponent,
      },
    });

    await modal.present();
  }

}
