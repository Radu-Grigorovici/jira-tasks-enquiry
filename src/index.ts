import { getTasks } from './get-tasks/get-tasks';

export const Greeter = (name: string): string => `Hello ${name}`;

export const GetTasks = getTasks;
