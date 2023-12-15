export const formatName = (name: string): string => {
    if ( name.endsWith('s')) {
        return name;
    } else {
        return `${name}s`;
    }
  };
