import { MergeErrorsPipe } from './merge-errors.pipe';

describe('MergeErrorsPipe', () => {
  it('create an instance', () => {
    const pipe = new MergeErrorsPipe();
    expect(pipe).toBeTruthy();
  });
});
