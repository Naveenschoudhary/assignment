export const getFileNameFromUrl = (url: string): string => {
    const segments: string[] = url.split('/');
    const nonEmptySegments: string[] = segments.filter(segment => segment !== '');
    return nonEmptySegments[nonEmptySegments.length - 1];
  };