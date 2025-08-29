// user level variables
export const COOKIE_USER_INFO = "user_info"; //temporary name

// ui level variables
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;
export type BreakpointKey = keyof typeof BREAKPOINTS;