import { getTasks } from './get-tasks/get-tasks';
import { sum } from './sum/sum';

export const Greeter = (name: string): string => `Hello ${name}`;

export const Sum = sum;

export const GetTasks = getTasks;
