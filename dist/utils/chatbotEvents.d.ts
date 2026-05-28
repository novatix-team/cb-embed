import type { SupportedLanguage } from '@/utils/i18n';
export declare const CHATBOT_OPEN_EVENT = "flowise-chatbot:open";
export declare const CHATBOT_CLOSE_EVENT = "flowise-chatbot:close";
export type ChatbotLifecycleEventDetail = {
    language: SupportedLanguage;
};
export declare const dispatchChatbotOpen: (language: SupportedLanguage) => void;
export declare const dispatchChatbotClose: (language: SupportedLanguage) => void;
//# sourceMappingURL=chatbotEvents.d.ts.map