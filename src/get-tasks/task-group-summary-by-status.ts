export interface TaskGroupSummaryByStatus {
  statusName: string;
  statusId: number;
  count: number;
  progress: {
    timeEstimation: number;
    timeLogged: number;
    percentage: number;
  };
}
