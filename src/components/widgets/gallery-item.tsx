import { Component } from 'solid-js';
import type { GalleryPerson } from './gallery';

type GalleryItemProps = {
  person: GalleryPerson;
  onContact: (email: string) => void;
  isHovered: boolean;
  onHover: () => void;
};

export const GalleryItem: Component<GalleryItemProps> = (props) => {
  const handleClick = () => {
    const mailtoUrl = `mailto:${props.person.email}?subject=Hello ${props.person.name}&body=Hi ${props.person.name},%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0ABest regards`;
    window.location.href = mailtoUrl;
  };

  return (
    <div
      class={`relative bg-white rounded-xl shadow-md overflow-hidden 
        transition-all duration-300 cursor-pointer group
        ${props.isHovered ? 'z-10 scale-[1.3] shadow-xl' : 'scale-95 opacity-50 hover:opacity-75'}`}
      onMouseEnter={props.onHover}
      onClick={handleClick}
    >
      <div class="aspect-[4/3]">
        <img src={props.person.photoUrl} alt={props.person.name} class="w-full h-full object-cover" />
      </div>
      <div class="p-4 text-center">
        <h3 class="text-xl font-semibold text-gray-800">{props.person.name}</h3>
        {props.person.role && <p class="text-sm text-gray-600 mt-1">{props.person.role}</p>}
        <a
          href={`mailto:${props.person.email}?subject=Hello ${props.person.name}&body=Hi ${props.person.name},%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0ABest regards`}
          class="mt-3 inline-block opacity-0 group-hover:opacity-100 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </a>
      </div>
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
    </div>
  );
};
