// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotificationType = {
  "PUSH_NOTIFICATION": "PUSH_NOTIFICATION",
  "ANNOUNCEMENT": "ANNOUNCEMENT"
};

const UserMiniAppStatus = {
  "PREPARING": "PREPARING",
  "DOWNLOADING": "DOWNLOADING",
  "DOWNLOAD_FAILED": "DOWNLOAD_FAILED",
  "UPDATING": "UPDATING",
  "UPDATE_FAILED": "UPDATE_FAILED",
  "INSTALLED": "INSTALLED",
  "PENDING": "PENDING",
  "DENIED": "DENIED",
  "FAILED": "FAILED"
};

const DefaultPage = {
  "DASHBOARD": "DASHBOARD",
  "HOME": "HOME",
  "NEWS": "NEWS"
};

const SourceType = {
  "APPSYNC": "APPSYNC",
  "PUBLIC": "PUBLIC"
};

const { NewsArticle, UserNotification, GroupNotification, MiniApp, UserMiniApp, UserMiniAppSettings, ApprovalRequest, ApprovalRequestStatus, UserSettings, RegionDivisionBranch, EmployeeResourceItems, StockPrice, ProfilePhoto, LambdaResponse, UserMiniAppResponse, Kpi, Database, LineItem, HeaderLineItemData, Attachment, LineItemStatus } = initSchema(schema);

export {
  NewsArticle,
  UserNotification,
  GroupNotification,
  MiniApp,
  UserMiniApp,
  UserMiniAppSettings,
  ApprovalRequest,
  ApprovalRequestStatus,
  UserSettings,
  RegionDivisionBranch,
  EmployeeResourceItems,
  NotificationType,
  UserMiniAppStatus,
  DefaultPage,
  SourceType,
  StockPrice,
  ProfilePhoto,
  LambdaResponse,
  UserMiniAppResponse,
  Kpi,
  Database,
  LineItem,
  HeaderLineItemData,
  Attachment,
  LineItemStatus
};