export const POST_PAGE_PATHNAME_PATEERN = /^\/([^\/]+)\/post\/([^\/]+)$/;
// More specific pattern for base64 encoded usernames (excludes common page names)
export const PROFILE_PAGE_PATHNAME_PATTERN = /^[A-Za-z0-9+/]{8,}={0,2}$/;