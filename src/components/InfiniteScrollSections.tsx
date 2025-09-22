import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

interface SectionConfig {
  bg: string;
  content: React.ReactNode;
}

interface Props {
  sections: SectionConfig[];
  repeat?: number; // how many times to repeat sequence
}

export function InfiniteScrollSections({ sections, repeat = 3 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll loop logic — jump back to start seamlessly
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      // if near bottom, reset to start of second batch
      if (scrollTop > scrollHeight - clientHeight * (repeat - 0.5)) {
        element.scrollTo({ top: clientHeight, behavior: 'instant' as ScrollBehavior });
      }
    };
    element.addEventListener('scroll', onScroll, { passive: true });
    return () => element.removeEventListener('scroll', onScroll);
  }, [repeat]);

  // Duplicate sections array
  const loopSections = Array.from({ length: repeat }, () => sections).flat();

  return (
    <Box
      ref={containerRef}
      data-infinite-scroll
      sx={{
        height: '100vh',
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    >
      {loopSections.map((section, idx) => {
        // The first bg is on top, the last is at the back (leaf)
        const bgParts = section.bg
          .split(',')
          .map(s => s.trim())
          .map(s => s.startsWith('url(') ? s : `url(${s})`)
          .join(', ');
        return (
          <Box
            key={idx}
            sx={{
              height: '100vh',
              scrollSnapAlign: 'start',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), ${bgParts}`,
              backgroundSize: 'cover, cover, cover, cover',
              backgroundPosition: 'center, center, center, center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              p: 4,
            }}
          >
            {section.content}
          </Box>
        );
      })}
    </Box>
  );
}
