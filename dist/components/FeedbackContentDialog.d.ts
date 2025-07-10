import { type SupportedLanguage } from '@/utils/i18n';
type FeedbackContentDialogProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (text: string) => void;
    backgroundColor?: string;
    textColor?: string;
    inputColor?: string;
    buttonColor?: string;
    language?: SupportedLanguage;
};
declare const FeedbackContentDialog: (props: FeedbackContentDialogProps) => import("solid-js").JSX.Element;
export default FeedbackContentDialog;
//# sourceMappingURL=FeedbackContentDialog.d.ts.map