import { Component, OnInit } from '@angular/core';

/**
 * Services
 */
import { NavigationService } from "../../services/navigation.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigation: any = [];

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.getNavigation();
  }

  /**
   * gettingNavigation from services
   */
  getNavigation() {
    this.navigationService.getNav().then((data) => {
      this.navigation = data;
    });

  }

}
