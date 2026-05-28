import type { SupportedLanguage } from '@/utils/i18n';

export const CHATBOT_OPEN_EVENT = 'flowise-chatbot:open';
export const CHATBOT_CLOSE_EVENT = 'flowise-chatbot:close';

export type ChatbotLifecycleEventDetail = {
  language: SupportedLanguage;
};

export const dispatchChatbotOpen = (language: SupportedLanguage) => {
  if (typeof document === 'undefined') return;
  document.dispatchEvent(
    new CustomEvent<ChatbotLifecycleEventDetail>(CHATBOT_OPEN_EVENT, {
      detail: { language },
      bubbles: true,
    }),
  );
};

export const dispatchChatbotClose = (language: SupportedLanguage) => {
  if (typeof document === 'undefined') return;
  document.dispatchEvent(
    new CustomEvent<ChatbotLifecycleEventDetail>(CHATBOT_CLOSE_EVENT, {
      detail: { language },
      bubbles: true,
    }),
  );
};
