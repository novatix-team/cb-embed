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

// Default person for debugging
const defaultPerson: GalleryPerson = {
  name: 'Stephanie Linner',
  email: 'mathilda@suisse-trombone.com',
  photoUrl: 'https://i.pravatar.cc/300',
  role: 'Chairman of the board',
};

export const Gallery: Component<GalleryProps> = (props) => {
  const person = () => props.person || defaultPerson;

  const handleClick = () => {
    const mailtoUrl = `mailto:${person().email}?subject=Hello ${person().name}&body=Hi ${person().name},%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0ABest regards`;
    window.location.href = mailtoUrl;
  };

  return (
    <div class="w-full flex justify-center items-center min-h-[300px] p-2">
      <div class="flex bg-white rounded-xl shadow-md overflow-hidden max-w-3xl w-full hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={handleClick}>
        {/* Left side - Image */}
        <div class="w-1/2">
          <img src={person().photoUrl} alt={person().name} class="w-full h-full object-cover" />
        </div>
        
        {/* Right side - Content */}
        <div class="w-1/2 p-6 flex flex-col justify-center">
          <h3 class="text-3xl font-semibold text-gray-800">{person().name}</h3>
          {person().role && <p class="text-lg text-gray-600 mt-2">{person().role}</p>}
          <a
            href={`mailto:${person().email}`}
            class="mt-6 inline-flex items-center gap-2 p-3 text-white rounded-full transition-all duration-300 w-fit hover:brightness-90 active:brightness-75"
            style={{ background: props.textInput?.sendButtonColor ?? '#3B81F6' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
            Reach out
          </a>
        </div>
      </div>
    </div>
  );
};
