import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BaseFullscreenPage,
  ContextService,
} from '@Willscotmobilemini/wsmm-mini-app-angular-sdk';

import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.page.html',
  styleUrls: ['./fullscreen.page.scss'],
})

export class FullscreenPage extends BaseFullscreenPage implements OnInit {
  // eslint-disable-next-line max-len
  online: boolean;

  constructor(
    protected router: Router,
    protected contextService: ContextService
  ) {
    super(router, contextService);
    this.online = navigator.onLine;
  }

  doFunction(path: String) {
    console.log('Function leads to Unit History Page');
    this.router.navigate([path]);
  }

  async ngOnInit() {
    await Browser.open({
      url: 'https://copilotstudio.microsoft.com/environments/Default-11e54560-89da-4eca-bf9e-e04a061d8d3f/bots/cr232_operationsAssistant/webchat?__version__=2',
      presentationStyle: 'popover',
    });

    Browser.addListener('browserFinished', () => { this.exitMiniApp(); });
  }
}
