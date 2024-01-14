import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) {}
   

  saveData(data: { no: any; judul: any; desk: any; }){
    return this.http.post('http://localhost/api/create.php', data);
  }

  gretrieveData(){
    return this.http.get('http://localhost/api/getMenu.php');
  }

  clearData(no: string){
    return this.http.delete('http://localhost/api/delete.php?no='+no);
  }
}
