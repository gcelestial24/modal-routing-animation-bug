import { Component, OnInit } from '@angular/core';
import { ModalController, IonNav } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent implements OnInit {
  level = 0;
  nextPage = ModalContentComponent;
  randomString = '';

  constructor(private modalController: ModalController, private nav: IonNav) {}

  ngOnInit() { }

  goForward() {
    if (this.level) {
      this.nav.pop();
    } else {
      this.nav.push(this.nextPage, { level: this.level + 1 });
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
