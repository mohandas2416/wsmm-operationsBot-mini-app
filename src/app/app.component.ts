import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStore, Predicates, syncExpression } from '@aws-amplify/datastore';
import {
  GroupNotification,
  MiniApp,
  NewsArticle,
  UserMiniApp,
  UserMiniAppSettings,
  UserNotification,
  ApprovalRequest,
  EmployeeResourceItems
} from '../models';
import {
  BaseMiniAppComponent,
  ContextService,
  AuthGuard,
} from '@Willscotmobilemini/wsmm-mini-app-angular-sdk';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent extends BaseMiniAppComponent {
  constructor(
    protected router: Router,
    protected contextService: ContextService,
    protected authGuard: AuthGuard
  ) {
    super(router, contextService, authGuard);

    DataStore.configure({
      syncExpressions: [
        syncExpression(NewsArticle, () => Predicates.ALL),
        syncExpression(MiniApp, () => (c) => c.appName('eq', '')),
        syncExpression(UserMiniApp, () => (c) => c.appName('eq', '')),
        syncExpression(UserMiniAppSettings, () => (c) => c.appName('eq', '')),
        syncExpression(GroupNotification, () => (c) => c.notificationId('eq', '')),
        syncExpression(UserNotification, () => (c) => c.notificationId('eq', '')),
        syncExpression(ApprovalRequest, () => (c) => c.externalId('eq', '')),
        syncExpression(EmployeeResourceItems, () => (c) => c.type('eq', '')),
      ],
    });
  }
}
