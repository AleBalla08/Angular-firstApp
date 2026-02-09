import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitForm {


  sendInfos(info:string) {
    console.log("infos enviadas: ", info)
  }
}
