import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';
import { PreorderPage } from '../preorder/preorder';
import { AboutPage } from '../about/about';
import { HirerequestPage } from '../hirerequest/hirerequest';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = LoginPage;
  tab2Root: any = HomePage;
  tab3Root: any = PaymentPage;
  tab4Root: any = PreorderPage;
  tab5Root: any = AboutPage;
  tab6Root: any = HirerequestPage;

  constructor() {

  }
}
