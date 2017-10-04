import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { NewPage } from '../addnew/addnew';
import { ItemDetailPage } from '../item-detail/item-detail';

/**
 * Generated class for the EquipamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipamentos',
  templateUrl: 'equipamentos.html',
})
export class EquipamentosPage {

  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(NewPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
  }
 
	viewItem(item){
	  this.navCtrl.push(ItemDetailPage, {
		item: item
	  });
	}
 
}