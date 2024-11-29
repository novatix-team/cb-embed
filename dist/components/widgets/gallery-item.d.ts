import { Component } from 'solid-js';
import type { GalleryPerson } from './gallery';
type GalleryItemProps = {
    person: GalleryPerson;
    onContact: (email: string) => void;
    isHovered: boolean;
    onHover: () => void;
};
export declare const GalleryItem: Component<GalleryItemProps>;
export {};
//# sourceMappingURL=gallery-item.d.ts.map