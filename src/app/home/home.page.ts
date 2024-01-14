import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  no: any;
  judul: any;
  desk: any;
  menus: any =[];

  constructor(
    public _apiService: ApiService,
    private localStorageService: LocalStorageService,
  ) {
  }


  saveData() {
    // Menyimpan data ke local storage
    const newData = { no: this.no, judul: this.judul, desk: this.desk };
    this.menus.push(newData);

    // Simpan ke local storage
    localStorage.setItem('menuData', JSON.stringify(this.menus));

    // Reset input fields
    this.no = null;
    this.judul = '';
    this.desk = '';
  }

  retrieveData() {
    // Mengambil data dari local storage
    const storedData = localStorage.getItem('menuData');
    if (storedData) {
      this.menus = JSON.parse(storedData);
    }
  }

  clearData() {
    // Menghapus data dari local storage
    localStorage.removeItem('menuData');
    this.menus = [];
  }
}

 

