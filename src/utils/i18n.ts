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
  // Button tooltips
  startNewChat: string;
  closeChat: string;
  thumbsUp: string;
  thumbsDown: string;
  copyToClipboard: string;
}

const translations: Record<SupportedLanguage, Translations> = {
  en: {
    disclaimer: 'AI-generated answers may contain errors. Verify important information.',
    disclaimerTitle: 'Disclaimer',
    disclaimerMessage:
      'Before we start, please note that by continuing this chat, you agree to our <a target="_blank" href="https://www.ehlgroup.com/en/privacy">Privacy Policy</a>. Do you agree?',
    disclaimerAgree: 'Yes, I agree',
    disclaimerDeny: "No, I don't",
    inputPlaceholder: 'Ask a question about EHL...',
    tooltipMessage: 'A question about EHL? I can help!',
    feedbackTitle: 'Provide additional feedback',
    feedbackPlaceholder: 'What do you think of the response?',
    feedbackSubmit: 'Submit Feedback',
    startNewChat: 'Start New Chat',
    closeChat: 'Close Chat',
    thumbsUp: 'Good answer',
    thumbsDown: 'Bad answer',
    copyToClipboard: 'Copy to clipboard',
  },
  fr: {
    disclaimer: "Les réponses générées par l'IA peuvent contenir des erreurs. Vérifiez les informations importantes.",
    disclaimerTitle: 'Avertissement',
    disclaimerMessage:
      'Avant de commencer, veuillez noter qu\'en continuant cette conversation, vous acceptez notre <a target="_blank" href="https://www.ehlgroup.com/fr/privacy">Politique de confidentialité</a>. Êtes-vous d\'accord ?',
    disclaimerAgree: "Oui, j'accepte",
    disclaimerDeny: 'Non, je refuse',
    inputPlaceholder: "Posez une question sur l'EHL...",
    tooltipMessage: "Une question sur l'EHL ? Je peux vous aider !",
    feedbackTitle: 'Fournir un commentaire supplémentaire',
    feedbackPlaceholder: 'Que pensez-vous de la réponse ?',
    feedbackSubmit: 'Envoyer les commentaires',
    startNewChat: 'Commencer un nouveau chat',
    closeChat: 'Fermer le chat',
    thumbsUp: 'Bonne réponse',
    thumbsDown: 'Mauvaise réponse',
    copyToClipboard: 'Copier dans le presse-papiers',
  },
  de: {
    disclaimer: 'KI-generierte Antworten können Fehler enthalten. Überprüfen Sie wichtige Informationen.',
    disclaimerTitle: 'Hinweis',
    disclaimerMessage:
      'Bevor wir beginnen, beachten Sie bitte, dass Sie durch die Fortsetzung dieses Chats unserer <a target="_blank" href="https://www.ehlgroup.com/de/privacy">Datenschutzerklärung</a> zustimmen. Sind Sie einverstanden?',
    disclaimerAgree: 'Ja, ich stimme zu',
    disclaimerDeny: 'Nein, ich stimme nicht zu',
    inputPlaceholder: 'Stellen Sie eine Frage zu EHL...',
    tooltipMessage: 'Eine Frage zu EHL? Ich kann helfen!',
    feedbackTitle: 'Geben Sie zusätzliches Feedback',
    feedbackPlaceholder: 'Was denken Sie über die Antwort?',
    feedbackSubmit: 'Feedback senden',
    startNewChat: 'Neuen Chat starten',
    closeChat: 'Chat schließen',
    thumbsUp: 'Gute Antwort',
    thumbsDown: 'Schlechte Antwort',
    copyToClipboard: 'In Zwischenablage kopieren',
  },
};

/**
 * Detects language from URL path
 * Supports: ehl.edu/en, ehl.edu/fr, ehl.edu/de, or ehl.edu (defaults to en)
 */
export function detectLanguageFromURL(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';

  const path = window.location.pathname.toLowerCase();

  // Check for language indicators in the path
  if (path.includes('/fr')) return 'fr';
  if (path.includes('/de')) return 'de';
  if (path.includes('/en')) return 'en';

  // Default to English if no language indicator found
  return 'en';
}

/**
 * Gets translations for the detected or specified language
 */
export function getTranslations(language?: SupportedLanguage): Translations {
  const lang = language || detectLanguageFromURL();
  return translations[lang] || translations.en;
}

/**
 * Gets a specific translation key for the detected or specified language
 */
export function t(key: keyof Translations, language?: SupportedLanguage): string {
  const trans = getTranslations(language);
  return trans[key];
}

/**
 * Sets up reactive translations that can be overridden from configuration
 */
export function createTranslationConfig(overrides?: Partial<Translations>, language?: SupportedLanguage) {
  const baseTranslations = getTranslations(language);
  return {
    ...baseTranslations,
    ...overrides,
  };
}
