import { Component, OnInit } from '@angular/core';


/**
 * Services
 */
import { NavigationService } from "../../services/navigation.service";


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  staticData: any = "";
  jsonData: any = null;

  constructor(private dataService: NavigationService) {
  }

  ngOnInit() {
    this.getStaticData();
    this.getJsonData();
  }

  /**
   * getStaticData from services
   */
  getStaticData() {
    this.staticData = this.dataService.getData()
  }

  /**
   * getJsonData from services
   */
  getJsonData() {
    this.dataService.getStaticData().then((data) => {
      this.jsonData = data;
    });
  }



}
