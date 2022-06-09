const faker = require('faker/locale/de');

export const generateRandomFullName = () => `${faker.name.firstName()} ${faker.name.lastName()}`;
export const generateRandomEmail = () => faker.internet.email();
export const generateRandomSubject = () => faker.random.word();
export const generateRandomComment = () => faker.lorem.paragraph();
