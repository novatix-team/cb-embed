import { JSX } from 'solid-js';
import { SupportedLanguage } from '@/utils/i18n';
type RatingButtonProps = {
    feedbackColor?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    disableIcon?: boolean;
    rating?: string;
    language?: SupportedLanguage;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const CopyToClipboardButton: (props: RatingButtonProps) => JSX.Element;
export declare const ThumbsUpButton: (props: RatingButtonProps) => JSX.Element;
export declare const ThumbsDownButton: (props: RatingButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=FeedbackButtons.d.ts.map