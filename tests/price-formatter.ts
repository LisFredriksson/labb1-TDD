export const roundPrice = (price: number, currency: string): string => {
    const roundedPrice = (Math.round(price * 100) / 100).toFixed(2);
    const formattedPrice = currency.replace('%PRICE%', roundedPrice);
    return `${roundedPrice} ${formattedPrice || currency || 'SEK'}`;
  };
