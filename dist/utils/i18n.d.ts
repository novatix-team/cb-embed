export type SupportedLanguage = 'en' | 'fr' | 'de';
export interface Translations {
    disclaimer: string;
    disclaimerTitle: string;
    disclaimerMessage: string;
    disclaimerAgree: string;
    disclaimerDeny: string;
    inputPlaceholder: string;
    tooltipMessage: string;
    feedbackTitle: string;
    feedbackPlaceholder: string;
    feedbackSubmit: string;
    startNewChat: string;
    closeChat: string;
    thumbsUp: string;
    thumbsDown: string;
    copyToClipboard: string;
}
/**
 * Detects language from URL path
 * Supports: ehl.edu/en, ehl.edu/fr, ehl.edu/de, or ehl.edu (defaults to en)
 */
export declare function detectLanguageFromURL(): SupportedLanguage;
/**
 * Gets translations for the detected or specified language
 */
export declare function getTranslations(language?: SupportedLanguage): Translations;
/**
 * Gets a specific translation key for the detected or specified language
 */
export declare function t(key: keyof Translations, language?: SupportedLanguage): string;
/**
 * Sets up reactive translations that can be overridden from configuration
 */
export declare function createTranslationConfig(overrides?: Partial<Translations>, language?: SupportedLanguage): {
    disclaimer: string;
    disclaimerTitle: string;
    disclaimerMessage: string;
    disclaimerAgree: string;
    disclaimerDeny: string;
    inputPlaceholder: string;
    tooltipMessage: string;
    feedbackTitle: string;
    feedbackPlaceholder: string;
    feedbackSubmit: string;
    startNewChat: string;
    closeChat: string;
    thumbsUp: string;
    thumbsDown: string;
    copyToClipboard: string;
};
//# sourceMappingURL=i18n.d.ts.map