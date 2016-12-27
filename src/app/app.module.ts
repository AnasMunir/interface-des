import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
import { PreorderPage } from '../pages/preorder/preorder';
import { AboutPage } from '../pages/about/about';
import { HirerequestPage } from '../pages/hirerequest/hirerequest';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    PaymentPage,
    PreorderPage,
    AboutPage,
    HirerequestPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    PaymentPage,
    PreorderPage,
    AboutPage,
    HirerequestPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
