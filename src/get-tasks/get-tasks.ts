import * as https from 'https';

import { TasksReport } from './tasks-report';

// declare return type
export function getTasks(userEmail: string, apiKey: string, subDomain: string): void {
  const url = `https://${subDomain}.atlassian.net/rest/api/2/search?jql=assignee=currentuser()+and+status=%27To%20Do%27`;
  console.log('functiongetTasks -> url', url);

  const auth = 'Basic ' + Buffer.from(userEmail + ':' + apiKey).toString('base64');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: auth,
  };

  const options = {
    headers,
  };

  https
    .get(url, options, res => {
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        console.log('functiongetTasks -> JSON.parse(data)', JSON.parse(data));
        return summarizeTaskData(JSON.parse(data) as Record<string, unknown>);
      });
    })
    .on('error', err => {
      console.log('Error: ' + err.message);
    });
}

function summarizeTaskData(taskData: any): TasksReport | void {
  const report: TasksReport = { count: 0 };
  if (taskData && taskData.total > 0) {
    const statuses: string[] = [];
    (taskData.issues as []).forEach((issue: any) => {
      console.log('issue.fields.status.name', issue.fields.status.name, typeof issue.fields.status.name);
      console.log('status', statuses);
      if (!statuses.some((status: string) => status === issue.fields.status.name)) {
        statuses.push(issue.fields.status.name as string);
      }
    });
    console.log('statuses', statuses);
  }
  return report;
}
