import { FooterTheme } from '@/features/bubble/types';
import { Show, onCleanup, onMount } from 'solid-js';
import { Marked } from '@ts-stack/markdown';

type Props = {
  footer?: FooterTheme;
  botContainer: HTMLDivElement | undefined;
  poweredByTextColor?: string;
  badgeBackgroundColor?: string;
};

const defaultTextColor = '#303235';

export const Badge = (props: Props) => {
  let liteBadge: HTMLAnchorElement | undefined;
  let observer: MutationObserver | undefined;

  // Set up markdown options
  Marked.setOptions({ isNoP: true, sanitize: false });

  // Function to set up the markdown text with proper link styling
  const setMarkdownTextRef = (el: HTMLSpanElement) => {
    if (el) {
      const textContent = props.footer?.text ?? 'Powered by';
      el.innerHTML = Marked.parse(textContent);

      // Style the text color
      el.style.color = props.footer?.textColor ?? props.poweredByTextColor ?? defaultTextColor;

      // Style all links in the markdown text
      el.querySelectorAll('a').forEach((link) => {
        link.style.color = props.footer?.textColor ?? props.poweredByTextColor ?? defaultTextColor;
        link.style.fontWeight = 'bold';
        link.style.textDecoration = 'none';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      });
    }
  };

  const appendBadgeIfNecessary = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((removedNode) => {
        if ('id' in removedNode && liteBadge && removedNode.id == 'lite-badge') {
          console.log("Sorry, you can't remove the brand 😅");
          props.botContainer?.append(liteBadge);
        }
      });
    });
  };

  onMount(() => {
    if (!document || !props.botContainer) return;
    observer = new MutationObserver(appendBadgeIfNecessary);
    observer.observe(props.botContainer, {
      subtree: false,
      childList: true,
    });
  });

  onCleanup(() => {
    if (observer) observer.disconnect();
  });

  return (
    <>
      <Show when={props.footer?.showFooter === undefined || props.footer?.showFooter === null || props.footer?.showFooter === true}>
        <div
          class="w-full flex justify-between items-center px-[20px] pt-[6px] pb-[10px] m-auto text-[13px]"
          style={{
            'background-color': props.badgeBackgroundColor ?? '#ffffff',
          }}
        >
          <span ref={setMarkdownTextRef} />
          <Show when={props.footer?.company}>
            <a
              ref={liteBadge}
              href={props.footer?.companyLink ?? 'https://flowiseai.com'}
              target="_blank"
              rel="noopener noreferrer"
              class="lite-badge"
              id="lite-badge"
              style={{
                'font-weight': 'bold',
                color: props.footer?.companyTextColor ?? props.footer?.textColor ?? props.poweredByTextColor ?? defaultTextColor,
                'text-decoration': 'underline',
              }}
            >
              {props.footer?.company}
            </a>
          </Show>
        </div>
      </Show>
      <Show when={props.footer?.showFooter === false}>
        <div
          class="w-full text-center px-[10px] pt-[6px] pb-[10px] m-auto text-[13px]"
          style={{
            color: props.footer?.textColor ?? props.poweredByTextColor ?? defaultTextColor,
            'background-color': props.badgeBackgroundColor ?? '#ffffff',
          }}
        />
      </Show>
    </>
  );
};
