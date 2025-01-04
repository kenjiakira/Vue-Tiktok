export function isTikTokUrl(url) {
    const tiktokPatterns = [
        /https?:\/\/((?:vm|vt|www)\.)?tiktok\.com/,
        /https?:\/\/((?:vm|vt|www)\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/,
        /https?:\/\/(?:www\.)?tiktok\.com\/@[\w.-]+/
    ];
    return tiktokPatterns.some(pattern => pattern.test(url));
}
