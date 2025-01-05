export function extractTikTokUrl(text: string): string {
  const tiktokPattern = /https:\/\/(?:www\.|vm\.)?tiktok\.com\/[^\s]+/;
  const match = text.match(tiktokPattern);
  return match ? match[0].split(' ')[0] : '';
}
