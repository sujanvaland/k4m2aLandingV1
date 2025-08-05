import { PROFILE_PAGE_PATHNAME_PATTERN } from "../constants/regex";

// List of known application routes that should not be treated as profile pages
const KNOWN_ROUTES = [
    'manifesto', 'research', 'terms', 'rules', 'privacy', 'qrpage', 'analytics',
    'support', 'request-invite', 'request-invite-creator', 'report-issue', 
    'pricing', 'signin', 'thank-you', 'career', 'careerdetails', 'security',
    'whatisk4m2a', 'contactus', 'Downloadapp', 'blog'
];

export const checkProfilePagePathname = (pathname) => {
    const parts = pathname.split('/').filter(Boolean);
    
    // If no parts, it's root path, not a profile page
    if (parts.length === 0) return false;
    
    // If first part is a known route, it's not a profile page
    if (KNOWN_ROUTES.includes(parts[0])) return false;
    
    // If it has multiple parts, it's likely a nested route, not a profile page
    if (parts.length > 1) return false;
    
    // Check if it matches the base64 pattern for encoded usernames
    return PROFILE_PAGE_PATHNAME_PATTERN.test(parts[0]);
}