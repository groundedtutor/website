export const themeStorageKey = "site:theme-mode";

type ThemeMode = "light" | "dark" | "auto";

export function readThemeMode(): ThemeMode {
    try {
        const stored = coerseThemeMode(localStorage.getItem(themeStorageKey));
        if (stored) {
            return stored;
        }
    } catch {
        // Ignore storage failures and use fallback mode.
    }

    return coerseThemeMode(document.documentElement.getAttribute("data-theme-mode")) ?? "auto";
}

export function writeThemeMode(mode: ThemeMode) {
    try {
        localStorage.setItem(themeStorageKey, mode);
    } catch {
        // Ignore storage failures.
    }
    document.documentElement.setAttribute("data-theme-mode", mode);
}

export function applyTheme(mode: Exclude<ThemeMode, "auto">) {
    document.documentElement.classList.toggle("dark", mode === "dark");
}

export function setThemeMode(mode: string, prefersDark?: boolean) {
    let newMode = coerseThemeMode(mode) ?? "light";
    writeThemeMode(newMode);
    if (newMode === "auto") {
        try {
            prefersDark ??= window.matchMedia("(prefers-color-scheme: dark)").matches;
            newMode = prefersDark ? "dark" : "light";
        } catch {
            newMode = "light"; // Fallback to light mode if media query fails.
        }
    }
    applyTheme(newMode);
}

export function coerseThemeMode(mode: string | null): ThemeMode | null {
    mode = mode?.toLowerCase() ?? null;
    if (mode === "light" || mode === "dark" || mode === "auto") {
        return mode;
    }
    return null;
}
