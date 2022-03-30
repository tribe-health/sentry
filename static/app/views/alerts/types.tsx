import {User} from 'sentry/types';
import {IssueAlertRule} from 'sentry/types/alerts';
import {IncidentRule} from 'sentry/views/alerts/incidentRules/types';

type Data = [number, {count: number}[]][];

export type Incident = {
  alertRule: IncidentRule;
  dateClosed: string | null;
  dateCreated: string;
  dateDetected: string;
  dateStarted: string;
  // Array of group ids
  discoverQuery: string;
  groups: string[];
  hasSeen: boolean;
  id: string;
  identifier: string;
  isSubscribed: boolean;
  organizationId: string;
  projects: string[];
  // Array of slugs
  seenBy: User[];
  status: IncidentStatus;
  statusMethod: IncidentStatusMethod;
  title: string;
  activities?: ActivityType[];
};

export type IncidentStats = {
  eventStats: {
    data: Data;
  };
  totalEvents: number;
  uniqueUsers: number;
};

export type ActivityTypeDraft = {
  comment: null | string;
  dateCreated: string;
  id: string;
  incidentIdentifier: string;
  type: IncidentActivityType;
  user: User | null;
};

export type ActivityType = ActivityTypeDraft & {
  previousValue: string | null;
  value: string | null;
  eventStats?: {data: Data};
};

export enum IncidentActivityType {
  CREATED = 0,
  DETECTED = 1,
  STATUS_CHANGE = 2,
  COMMENT = 3,
  STARTED = 4,
}

export enum IncidentStatus {
  OPENED = 1,
  CLOSED = 2,
  WARNING = 10,
  CRITICAL = 20,
}

export enum AlertRuleStatus {
  PENDING = 0,
  SNAPSHOT = 4,
  DISABLED = 5,
}

export type CombinedMetricIssueAlerts = (IssueAlertRule | IncidentRule) & {
  type: string;
  latestIncident?: Incident | null;
};
