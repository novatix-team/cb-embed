import { Component } from 'solid-js';
export type GalleryPerson = {
    name: string;
    email: string;
    photoUrl: string;
    role?: string;
};
type GalleryProps = {
    people?: any[];
    textInput?: {
        sendButtonColor?: string;
    };
};
export declare const Gallery: Component<GalleryProps>;
export {};
//# sourceMappingURL=gallery.d.ts.map