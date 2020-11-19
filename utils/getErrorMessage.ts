export function getErrorMessage(s: string): string {
  const re = /(?<=Error:).+/;
  return s.match(re)?.toString().trim() ?? '';
}
