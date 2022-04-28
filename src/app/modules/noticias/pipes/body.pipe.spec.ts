import { BodyPipe } from './body.pipe';

describe('BodyPipe', () => {
  it('create an instance', () => {
    const pipe = new BodyPipe();
    expect(pipe).toBeTruthy();
  });
});
