import { question1 } from '..';

describe('Question 1', () => {
  it('Should map emailAddress to id if both phoneNumber and emailAddress are available', () => {
    const result = question1({
      name: 'John Doe',
      phoneNumber: '12345678',
      emailAddress: 'john@example.com',
      dateOfBirth: '1990-01-01',
    });

    expect(result).toMatchObject({
      id: 'john@example.com',
      name: 'John Doe',
      phoneNumber: '12345678',
      emailAddress: 'john@example.com',
      dateOfBirth: new Date(1990, 1, 1),
    });
  });

  it('Should return correct age based on the dateOfBirth', () => {
    const result = question1({
      name: 'John Doe',
      phoneNumber: '12345678',
      emailAddress: 'john@example.com',
      dateOfBirth: '1990-01-01',
    });

    expect(result.age).toEqual(32);
  });

  it('Should throw if both phoneNumber and emailAddress are undefined', () => {
    expect(() => {
      question1({
        name: 'John Doe',
        phoneNumber: undefined,
        emailAddress: undefined,
        dateOfBirth: '1990-01-01',
      });
    }).toThrow();
  });
});
