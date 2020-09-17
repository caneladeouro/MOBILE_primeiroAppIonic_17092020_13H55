import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.page.html',
  styleUrls: ['./selected.page.scss'],
})

@Component({
  selector: 'select-example',
  templateUrl: 'selected.page.html',
  styleUrls: ['./selected.page.scss'],
})

export class SelectedPage implements OnInit {

  txtSaida: any; nome: any; cbmGenero: any; cbmCor: any; chkExp: any; chkHobbies: any;

  num1: number = 2; num2: number = 6;

  constructor(
    public alertController: AlertController,
    public ToastController: ToastController
  ) { }

  ngOnInit() {
  }

  async alertIonic() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

  }
  async exibir() {
    const toast = await this.ToastController.create({
      message: "Nome: " + this.nome + ", Gênero: " + this.cbmGenero + "<br>Cabelo: " + this.cbmCor +
      "<br>Experiências: " + this.chkExp + "<br>Hobbies: " + this.chkHobbies,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  exibir2 () {
    this.num1 = this.nome;

    this.txtSaida = 'Nome: ' + this.nome + 'Genêro: ' + this.cbmGenero + '\nCabelo ' + this.cbmCor +
    '\nExperiências: ' + this.chkExp + 'Hobbies: ' + this.chkHobbies + 'Exemplo de cálculo: ' + this.num1 * this.num2;
  }

}
