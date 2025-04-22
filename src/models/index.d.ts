import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum NotificationType {
  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  ANNOUNCEMENT = "ANNOUNCEMENT"
}

export enum UserMiniAppStatus {
  PREPARING = "PREPARING",
  DOWNLOADING = "DOWNLOADING",
  DOWNLOAD_FAILED = "DOWNLOAD_FAILED",
  UPDATING = "UPDATING",
  UPDATE_FAILED = "UPDATE_FAILED",
  INSTALLED = "INSTALLED",
  PENDING = "PENDING",
  DENIED = "DENIED",
  FAILED = "FAILED"
}

export enum DefaultPage {
  DASHBOARD = "DASHBOARD",
  HOME = "HOME",
  NEWS = "NEWS"
}

export enum SourceType {
  APPSYNC = "APPSYNC",
  PUBLIC = "PUBLIC"
}

type EagerStockPrice = {
  readonly symbol: string;
  readonly open: number;
  readonly high: number;
  readonly low: number;
  readonly price: number;
  readonly volume?: number | null;
  readonly latestTradingDay: string;
  readonly previousClose: number;
  readonly change: number;
  readonly changePercent: number;
}

type LazyStockPrice = {
  readonly symbol: string;
  readonly open: number;
  readonly high: number;
  readonly low: number;
  readonly price: number;
  readonly volume?: number | null;
  readonly latestTradingDay: string;
  readonly previousClose: number;
  readonly change: number;
  readonly changePercent: number;
}

export declare type StockPrice = LazyLoading extends LazyLoadingDisabled ? EagerStockPrice : LazyStockPrice

export declare const StockPrice: (new (init: ModelInit<StockPrice>) => StockPrice)

type EagerProfilePhoto = {
  readonly statusCode: number;
  readonly photo: string;
}

type LazyProfilePhoto = {
  readonly statusCode: number;
  readonly photo: string;
}

export declare type ProfilePhoto = LazyLoading extends LazyLoadingDisabled ? EagerProfilePhoto : LazyProfilePhoto

export declare const ProfilePhoto: (new (init: ModelInit<ProfilePhoto>) => ProfilePhoto)

type EagerLambdaResponse = {
  readonly statusCode: number;
  readonly body: string;
}

type LazyLambdaResponse = {
  readonly statusCode: number;
  readonly body: string;
}

export declare type LambdaResponse = LazyLoading extends LazyLoadingDisabled ? EagerLambdaResponse : LazyLambdaResponse

export declare const LambdaResponse: (new (init: ModelInit<LambdaResponse>) => LambdaResponse)

type EagerUserMiniAppResponse = {
  readonly email: string;
  readonly appName: string;
  readonly appId: string;
  readonly status: string;
  readonly requestedOn?: string | null;
}

type LazyUserMiniAppResponse = {
  readonly email: string;
  readonly appName: string;
  readonly appId: string;
  readonly status: string;
  readonly requestedOn?: string | null;
}

export declare type UserMiniAppResponse = LazyLoading extends LazyLoadingDisabled ? EagerUserMiniAppResponse : LazyUserMiniAppResponse

export declare const UserMiniAppResponse: (new (init: ModelInit<UserMiniAppResponse>) => UserMiniAppResponse)

type EagerKpi = {
  readonly title: string;
  readonly source: string;
  readonly position: number;
  readonly type: SourceType | keyof typeof SourceType;
  readonly query?: string | null;
}

type LazyKpi = {
  readonly title: string;
  readonly source: string;
  readonly position: number;
  readonly type: SourceType | keyof typeof SourceType;
  readonly query?: string | null;
}

export declare type Kpi = LazyLoading extends LazyLoadingDisabled ? EagerKpi : LazyKpi

export declare const Kpi: (new (init: ModelInit<Kpi>) => Kpi)

type EagerDatabase = {
  readonly name: string;
  readonly branchSpecific: boolean;
}

type LazyDatabase = {
  readonly name: string;
  readonly branchSpecific: boolean;
}

export declare type Database = LazyLoading extends LazyLoadingDisabled ? EagerDatabase : LazyDatabase

export declare const Database: (new (init: ModelInit<Database>) => Database)

type EagerLineItem = {
  readonly title: string;
  readonly icon: string;
  readonly data?: HeaderLineItemData[] | null;
  readonly notes: string;
  readonly read: boolean;
  readonly attachments?: Attachment[] | null;
}

type LazyLineItem = {
  readonly title: string;
  readonly icon: string;
  readonly data?: HeaderLineItemData[] | null;
  readonly notes: string;
  readonly read: boolean;
  readonly attachments?: Attachment[] | null;
}

export declare type LineItem = LazyLoading extends LazyLoadingDisabled ? EagerLineItem : LazyLineItem

export declare const LineItem: (new (init: ModelInit<LineItem>) => LineItem)

type EagerHeaderLineItemData = {
  readonly name: string;
  readonly value: string;
  readonly type?: string | null;
  readonly hide?: boolean | null;
}

type LazyHeaderLineItemData = {
  readonly name: string;
  readonly value: string;
  readonly type?: string | null;
  readonly hide?: boolean | null;
}

export declare type HeaderLineItemData = LazyLoading extends LazyLoadingDisabled ? EagerHeaderLineItemData : LazyHeaderLineItemData

export declare const HeaderLineItemData: (new (init: ModelInit<HeaderLineItemData>) => HeaderLineItemData)

type EagerAttachment = {
  readonly name: string;
  readonly type: string;
  readonly url: string;
}

type LazyAttachment = {
  readonly name: string;
  readonly type: string;
  readonly url: string;
}

export declare type Attachment = LazyLoading extends LazyLoadingDisabled ? EagerAttachment : LazyAttachment

export declare const Attachment: (new (init: ModelInit<Attachment>) => Attachment)

type EagerLineItemStatus = {
  readonly id: string;
  readonly read: boolean;
}

type LazyLineItemStatus = {
  readonly id: string;
  readonly read: boolean;
}

export declare type LineItemStatus = LazyLoading extends LazyLoadingDisabled ? EagerLineItemStatus : LazyLineItemStatus

export declare const LineItemStatus: (new (init: ModelInit<LineItemStatus>) => LineItemStatus)

type NewsArticleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserNotificationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GroupNotificationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MiniAppMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMiniAppMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMiniAppSettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ApprovalRequestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ApprovalRequestStatusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserSettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RegionDivisionBranchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeResourceItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerNewsArticle = {
  readonly id: string;
  readonly newsArticleId: string;
  readonly expiredOn: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNewsArticle = {
  readonly id: string;
  readonly newsArticleId: string;
  readonly expiredOn: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NewsArticle = LazyLoading extends LazyLoadingDisabled ? EagerNewsArticle : LazyNewsArticle

export declare const NewsArticle: (new (init: ModelInit<NewsArticle, NewsArticleMetaData>) => NewsArticle) & {
  copyOf(source: NewsArticle, mutator: (draft: MutableModel<NewsArticle, NewsArticleMetaData>) => MutableModel<NewsArticle, NewsArticleMetaData> | void): NewsArticle;
}

type EagerUserNotification = {
  readonly id: string;
  readonly notificationId: string;
  readonly recipient: string;
  readonly appName: string;
  readonly notificationType: NotificationType | keyof typeof NotificationType;
  readonly expiredOn: string;
  readonly title: string;
  readonly body: string;
  readonly htmlBody?: string | null;
  readonly action: string;
  readonly read: boolean;
  readonly hidden: boolean;
  readonly owner?: string | null;
  readonly data?: string | null;
  readonly priority?: boolean | null;
  readonly homeHidden?: boolean | null;
  readonly creationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserNotification = {
  readonly id: string;
  readonly notificationId: string;
  readonly recipient: string;
  readonly appName: string;
  readonly notificationType: NotificationType | keyof typeof NotificationType;
  readonly expiredOn: string;
  readonly title: string;
  readonly body: string;
  readonly htmlBody?: string | null;
  readonly action: string;
  readonly read: boolean;
  readonly hidden: boolean;
  readonly owner?: string | null;
  readonly data?: string | null;
  readonly priority?: boolean | null;
  readonly homeHidden?: boolean | null;
  readonly creationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserNotification = LazyLoading extends LazyLoadingDisabled ? EagerUserNotification : LazyUserNotification

export declare const UserNotification: (new (init: ModelInit<UserNotification, UserNotificationMetaData>) => UserNotification) & {
  copyOf(source: UserNotification, mutator: (draft: MutableModel<UserNotification, UserNotificationMetaData>) => MutableModel<UserNotification, UserNotificationMetaData> | void): UserNotification;
}

type EagerGroupNotification = {
  readonly id: string;
  readonly notificationId: string;
  readonly notificationType: NotificationType | keyof typeof NotificationType;
  readonly recipient: string;
  readonly appName: string;
  readonly expiredOn: string;
  readonly title: string;
  readonly body: string;
  readonly htmlBody?: string | null;
  readonly action: string;
  readonly data?: string | null;
  readonly priority?: boolean | null;
  readonly homeHidden?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupNotification = {
  readonly id: string;
  readonly notificationId: string;
  readonly notificationType: NotificationType | keyof typeof NotificationType;
  readonly recipient: string;
  readonly appName: string;
  readonly expiredOn: string;
  readonly title: string;
  readonly body: string;
  readonly htmlBody?: string | null;
  readonly action: string;
  readonly data?: string | null;
  readonly priority?: boolean | null;
  readonly homeHidden?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupNotification = LazyLoading extends LazyLoadingDisabled ? EagerGroupNotification : LazyGroupNotification

export declare const GroupNotification: (new (init: ModelInit<GroupNotification, GroupNotificationMetaData>) => GroupNotification) & {
  copyOf(source: GroupNotification, mutator: (draft: MutableModel<GroupNotification, GroupNotificationMetaData>) => MutableModel<GroupNotification, GroupNotificationMetaData> | void): GroupNotification;
}

type EagerMiniApp = {
  readonly id: string;
  readonly appName: string;
  readonly appId: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly rolesCanInstall?: (string | null)[] | null;
  readonly rolesCanRequestInstall?: (string | null)[] | null;
  readonly defaultAppsRoles?: (string | null)[] | null;
  readonly icon: string;
  readonly category: string;
  readonly featured: boolean;
  readonly supportOffline: boolean;
  readonly databases?: Database[] | null;
  readonly url?: string | null;
  readonly kpis?: Kpi[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMiniApp = {
  readonly id: string;
  readonly appName: string;
  readonly appId: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly rolesCanInstall?: (string | null)[] | null;
  readonly rolesCanRequestInstall?: (string | null)[] | null;
  readonly defaultAppsRoles?: (string | null)[] | null;
  readonly icon: string;
  readonly category: string;
  readonly featured: boolean;
  readonly supportOffline: boolean;
  readonly databases?: Database[] | null;
  readonly url?: string | null;
  readonly kpis?: Kpi[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MiniApp = LazyLoading extends LazyLoadingDisabled ? EagerMiniApp : LazyMiniApp

export declare const MiniApp: (new (init: ModelInit<MiniApp, MiniAppMetaData>) => MiniApp) & {
  copyOf(source: MiniApp, mutator: (draft: MutableModel<MiniApp, MiniAppMetaData>) => MutableModel<MiniApp, MiniAppMetaData> | void): MiniApp;
}

type EagerUserMiniApp = {
  readonly id: string;
  readonly email: string;
  readonly appName: string;
  readonly status: UserMiniAppStatus | keyof typeof UserMiniAppStatus;
  readonly requestedOn?: string | null;
  readonly approvedOrDeniedOn?: string | null;
  readonly approvedOrDeniedBy?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMiniApp = {
  readonly id: string;
  readonly email: string;
  readonly appName: string;
  readonly status: UserMiniAppStatus | keyof typeof UserMiniAppStatus;
  readonly requestedOn?: string | null;
  readonly approvedOrDeniedOn?: string | null;
  readonly approvedOrDeniedBy?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMiniApp = LazyLoading extends LazyLoadingDisabled ? EagerUserMiniApp : LazyUserMiniApp

export declare const UserMiniApp: (new (init: ModelInit<UserMiniApp, UserMiniAppMetaData>) => UserMiniApp) & {
  copyOf(source: UserMiniApp, mutator: (draft: MutableModel<UserMiniApp, UserMiniAppMetaData>) => MutableModel<UserMiniApp, UserMiniAppMetaData> | void): UserMiniApp;
}

type EagerUserMiniAppSettings = {
  readonly id: string;
  readonly email: string;
  readonly appName: string;
  readonly favorite?: boolean | null;
  readonly settings?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMiniAppSettings = {
  readonly id: string;
  readonly email: string;
  readonly appName: string;
  readonly favorite?: boolean | null;
  readonly settings?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMiniAppSettings = LazyLoading extends LazyLoadingDisabled ? EagerUserMiniAppSettings : LazyUserMiniAppSettings

export declare const UserMiniAppSettings: (new (init: ModelInit<UserMiniAppSettings, UserMiniAppSettingsMetaData>) => UserMiniAppSettings) & {
  copyOf(source: UserMiniAppSettings, mutator: (draft: MutableModel<UserMiniAppSettings, UserMiniAppSettingsMetaData>) => MutableModel<UserMiniAppSettings, UserMiniAppSettingsMetaData> | void): UserMiniAppSettings;
}

type EagerApprovalRequest = {
  readonly id: string;
  readonly externalId: string;
  readonly system: string;
  readonly recipient: string;
  readonly title: string;
  readonly submittedDate: string;
  readonly submittedBy: string;
  readonly notes: string;
  readonly data?: HeaderLineItemData[] | null;
  readonly lineItems: LineItem[];
  readonly sync: string;
  readonly errorCount?: number | null;
  readonly errorMessage?: string | null;
  readonly status: string;
  readonly read: boolean;
  readonly comments?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApprovalRequest = {
  readonly id: string;
  readonly externalId: string;
  readonly system: string;
  readonly recipient: string;
  readonly title: string;
  readonly submittedDate: string;
  readonly submittedBy: string;
  readonly notes: string;
  readonly data?: HeaderLineItemData[] | null;
  readonly lineItems: LineItem[];
  readonly sync: string;
  readonly errorCount?: number | null;
  readonly errorMessage?: string | null;
  readonly status: string;
  readonly read: boolean;
  readonly comments?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ApprovalRequest = LazyLoading extends LazyLoadingDisabled ? EagerApprovalRequest : LazyApprovalRequest

export declare const ApprovalRequest: (new (init: ModelInit<ApprovalRequest, ApprovalRequestMetaData>) => ApprovalRequest) & {
  copyOf(source: ApprovalRequest, mutator: (draft: MutableModel<ApprovalRequest, ApprovalRequestMetaData>) => MutableModel<ApprovalRequest, ApprovalRequestMetaData> | void): ApprovalRequest;
}

type EagerApprovalRequestStatus = {
  readonly id: string;
  readonly externalId: string;
  readonly read: boolean;
  readonly lineItems: LineItemStatus[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApprovalRequestStatus = {
  readonly id: string;
  readonly externalId: string;
  readonly read: boolean;
  readonly lineItems: LineItemStatus[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ApprovalRequestStatus = LazyLoading extends LazyLoadingDisabled ? EagerApprovalRequestStatus : LazyApprovalRequestStatus

export declare const ApprovalRequestStatus: (new (init: ModelInit<ApprovalRequestStatus, ApprovalRequestStatusMetaData>) => ApprovalRequestStatus) & {
  copyOf(source: ApprovalRequestStatus, mutator: (draft: MutableModel<ApprovalRequestStatus, ApprovalRequestStatusMetaData>) => MutableModel<ApprovalRequestStatus, ApprovalRequestStatusMetaData> | void): ApprovalRequestStatus;
}

type EagerUserSettings = {
  readonly id: string;
  readonly email: string;
  readonly userId: string;
  readonly branchCode: string;
  readonly owner?: string | null;
  readonly defaultPage?: DefaultPage | keyof typeof DefaultPage | null;
  readonly couchbaseToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSettings = {
  readonly id: string;
  readonly email: string;
  readonly userId: string;
  readonly branchCode: string;
  readonly owner?: string | null;
  readonly defaultPage?: DefaultPage | keyof typeof DefaultPage | null;
  readonly couchbaseToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSettings = LazyLoading extends LazyLoadingDisabled ? EagerUserSettings : LazyUserSettings

export declare const UserSettings: (new (init: ModelInit<UserSettings, UserSettingsMetaData>) => UserSettings) & {
  copyOf(source: UserSettings, mutator: (draft: MutableModel<UserSettings, UserSettingsMetaData>) => MutableModel<UserSettings, UserSettingsMetaData> | void): UserSettings;
}

type EagerRegionDivisionBranch = {
  readonly id: string;
  readonly divisionName?: string | null;
  readonly regionDescription?: string | null;
  readonly branchName?: string | null;
  readonly branchCode?: string | null;
  readonly msa?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRegionDivisionBranch = {
  readonly id: string;
  readonly divisionName?: string | null;
  readonly regionDescription?: string | null;
  readonly branchName?: string | null;
  readonly branchCode?: string | null;
  readonly msa?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RegionDivisionBranch = LazyLoading extends LazyLoadingDisabled ? EagerRegionDivisionBranch : LazyRegionDivisionBranch

export declare const RegionDivisionBranch: (new (init: ModelInit<RegionDivisionBranch, RegionDivisionBranchMetaData>) => RegionDivisionBranch) & {
  copyOf(source: RegionDivisionBranch, mutator: (draft: MutableModel<RegionDivisionBranch, RegionDivisionBranchMetaData>) => MutableModel<RegionDivisionBranch, RegionDivisionBranchMetaData> | void): RegionDivisionBranch;
}

type EagerEmployeeResourceItems = {
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly enddate?: string | null;
  readonly country: string;
  readonly url?: string | null;
  readonly language?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployeeResourceItems = {
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly enddate?: string | null;
  readonly country: string;
  readonly url?: string | null;
  readonly language?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EmployeeResourceItems = LazyLoading extends LazyLoadingDisabled ? EagerEmployeeResourceItems : LazyEmployeeResourceItems

export declare const EmployeeResourceItems: (new (init: ModelInit<EmployeeResourceItems, EmployeeResourceItemsMetaData>) => EmployeeResourceItems) & {
  copyOf(source: EmployeeResourceItems, mutator: (draft: MutableModel<EmployeeResourceItems, EmployeeResourceItemsMetaData>) => MutableModel<EmployeeResourceItems, EmployeeResourceItemsMetaData> | void): EmployeeResourceItems;
}