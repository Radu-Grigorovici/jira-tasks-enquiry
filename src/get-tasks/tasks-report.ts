import { TaskGroupSummaryByStatus } from './task-group-summary-by-status';

export interface TasksReport {
  count: number;
  projectsCount?: number;
  statusesCount?: number;
  assigneeName?: string;
  taskSummaryByStatus?: [TaskGroupSummaryByStatus];
}
