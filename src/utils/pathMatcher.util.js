import { PROFILE_PAGE_PATHNAME_PATTERN } from "../constants/regex";

export const checkProfilePagePathname = (pathname) => {
    const parts = pathname.split('/').filter(Boolean);
    return PROFILE_PAGE_PATHNAME_PATTERN.test(parts[0]) ? true : false;
}