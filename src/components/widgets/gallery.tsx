import { Component, For, createSignal } from 'solid-js';
import { GalleryItem } from './gallery-item';

export type GalleryPerson = {
  name: string;
  email: string;
  photoUrl: string;
  role?: string;
};

type GalleryProps = {
  people?: GalleryPerson[];
};

// Default gallery people for debugging
const defaultPeople: GalleryPerson[] = [
  {
    name: 'Mathilda Spark 2',
    email: 'mathilda@suisse-trombone.com',
    photoUrl: 'https://i.pravatar.cc/300',
    role: 'CEO',
  },
  {
    name: 'James Gosper 2',
    email: 'james@suisse-trombone.com',
    photoUrl: 'https://i.pravatar.cc/301',
    role: 'CTO',
  },
  {
    name: 'Geralt Berry 2',
    email: 'geralt@suisse-trombone.com',
    photoUrl: 'https://i.pravatar.cc/302',
    role: 'Customer Support',
  },
];

export const Gallery: Component<GalleryProps> = (props) => {
  const people = () => props.people || defaultPeople;
  const [hoveredIndex, setHoveredIndex] = createSignal(1); // Center item focused by default

  const handleContact = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div class="w-full flex justify-center items-center min-h-[400px] p-4 overflow-hidden">
      <div class="flex gap-2 relative w-full max-w-6xl mx-auto">
        <For each={people()}>
          {(person, index) => (
            <div
              class={`relative transition-all duration-300 flex-1 min-w-0
                ${index() === 0 ? 'origin-left' : index() === people().length - 1 ? 'origin-right' : 'origin-center'}
              `}
              style={{
                transform:
                  hoveredIndex() === index() ? `translateX(${index() === 0 ? '10%' : index() === people().length - 1 ? '-10%' : '0'})` : 'none',
                'z-index': hoveredIndex() === index() ? 20 : 10 - index(),
              }}
            >
              <GalleryItem
                person={person}
                onContact={handleContact}
                isHovered={hoveredIndex() === index()}
                onHover={() => setHoveredIndex(index())}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
