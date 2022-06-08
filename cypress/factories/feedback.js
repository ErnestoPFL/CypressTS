import { Factory } from 'rosie';
import {
  generateRandomFullName,
  generateRandomEmail,
  generateRandomSubject,
  generateRandomComment,
} from '../support/faker';

const BaseFeedBack = new Factory().attrs({
  name: '',
  email: '',
  subject: '',
  comment: '',
});

export const feedbackData = new Factory().extend(BaseFeedBack).after((entity) => ({
  ...entity,
  name: generateRandomFullName(),
  email: generateRandomEmail(),
  subject: generateRandomSubject(),
  comment: generateRandomComment(),

}));
