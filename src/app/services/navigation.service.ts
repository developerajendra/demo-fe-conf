import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class NavigationService {

  constructor(private http: Http) { }

  getNav(): any {
    return new Promise<any>((resolve) => {
      let data = this.http.get("../../assets/data/navigation.json")
        .map((data) => {
          resolve(data.json());
        }).subscribe((data) => {
          resolve(data);
        })
    })
  }

getData(){
  return "hello world";
}

  getStaticData(): any {
    return new Promise<any>((resolve) => {
      let data = this.http.get("../../assets/data/staticData.json")
        .map((data) => {
          resolve(data.json());
        }).subscribe((data) => {
          resolve(data);
        })
    })
  }



}
