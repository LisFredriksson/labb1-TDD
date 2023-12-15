import { roundPrice } from './price-formatter';

describe('price-formatter.ts tests', () => {
  it('should return price with two decimals and SEK as currency', () => {
    const actualResult = roundPrice(2.6785, "SEK");
    expect(actualResult).toMatch("2.68 SEK");
  });
  it('should return correct currency', () => {
    const actualResult = roundPrice(2.6785, "NOK");
    expect(actualResult).toMatch("2.68 NOK");
  });
  it('should return correct formatted currency', () => {
    const actualResult = roundPrice(1024.2048, 'USD %PRICE%');
    expect(actualResult).toMatch("USD 1024.20");
  });
  it('should return correct formatted currency', () => {
    const actualResult = roundPrice(14, '$%PRICE%');
    expect(actualResult).toMatch("$14.00");
  });
  it('should return correct formatted currency', () => {
    const actualResult = roundPrice(1024.2048, 'USD %PRICE%');
    expect(actualResult).toMatch("USD 1024.20");
  });
});
