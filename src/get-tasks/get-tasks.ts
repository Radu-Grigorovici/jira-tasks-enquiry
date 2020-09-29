import * as http from 'http';

// declare return type
export function getTasks(userEmail: string, apiKey: string, subDomain: string): void {
  const url = `curl -D- -u ${userEmail}:${apiKey} -X GET -H "Content-Type: application/json" "https://${subDomain}.atlassian.net/rest/api/2/search?jql=assignee=currentuser()+and+status=%27To%20Do%27"`;
  http
    .get(url, res => {
      let data = '';

      // A chunk of data has been received.
      res.on('data', chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      res.on('end', () => {
        console.log(JSON.parse(data).explanation);
      });
    })
    .on('error', err => {
      console.log('Error: ' + err.message);
    });
}
