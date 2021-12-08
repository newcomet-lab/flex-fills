import { NumberWithSpacePipe } from './number-with-space.pipe';

describe('NumberWithSpacePipe', () => {
  it('create an instance', () => {
    const pipe = new NumberWithSpacePipe();
    expect(pipe).toBeTruthy();
  });
});
