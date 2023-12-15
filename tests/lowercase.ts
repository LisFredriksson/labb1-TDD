export const isLowerCase = (text: string): boolean => {
    const lowerCase = /^[a-z]+$/;
    return lowerCase.test(text);
  };
