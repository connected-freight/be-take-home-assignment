import { Question1Input } from './models/input';
import { Question1Output } from './models/output';

export function question1(input: Question1Input): Question1Output {
  // TODO: Implement and replace the return object
  return {
    id: 'john@example.com',
    name: 'John Doe',
    phoneNumber: '12345678',
    emailAddress: 'john@example.com',
    dateOfBirth: new Date(1990, 1, 1),
    age: 32,
  };
}
