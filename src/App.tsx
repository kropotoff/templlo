import React, { useRef } from 'react';
import { InfiniteScrollSections } from './components/InfiniteScrollSections';
import beijeOne from './assets/Beije_texture_one.png';
import beijeTwo from './assets/Beije_texture_two.png';
import beijeThree from './assets/Beije_texture_three.png';
import { Box, AppBar, Toolbar, useTheme, Button as MuiButton } from '@mui/material';
import logoUrl from './assets/logo.png';
import { Intro, Community, CoreValues, AboutUs, BookRefer } from './components/sections';

const sectionData = [
  {
    id: 'intro',
    label: 'Intro',
    bg: beijeOne,
    content: <Intro />,
  },
  {
    id: 'community',
    label: 'Community',
    bg: beijeThree,
    content: <Community />,
  },
  {
    id: 'values',
    label: 'Core Values',
    bg: beijeOne,
    content: <CoreValues />,
  },
  {
    id: 'about',
    label: 'About',
    bg: beijeTwo,
    content: <AboutUs />,
  },
  {
    id: 'book',
    label: 'Book & Refer',
    bg: beijeOne,
    content: <BookRefer />,
  },
];

export default function App() {
  const theme = useTheme();
  // Create refs for each section
  const sectionRefs = useRef(
    sectionData.reduce((acc, curr) => {
      acc[curr.id] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as Record<string, React.RefObject<HTMLDivElement | null>>)
  );

  // Scroll to section by id - always scroll to the first instance (first loop)
  const scrollToSection = (id: string) => {
    const sectionIndex = sectionData.findIndex(section => section.id === id);
    if (sectionIndex !== -1) {
      // Calculate the position of the first instance of this section
      const firstInstanceTop = sectionIndex * window.innerHeight;
      const container = document.querySelector('[data-infinite-scroll]');
      if (container) {
        container.scrollTo({ top: firstInstanceTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Header bar with logo and evenly spread menu */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#E3D6CD', // Custom app bar background color
          color: theme.palette.primary.main,        // #270a02
          boxShadow: 'none',
          overflow: 'visible',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, md: 84 }, // Reduced by 30%: 80*0.7=56, 120*0.7=84
            px: { xs: 2, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              height: { xs: 56, md: 84 }, // Match the new toolbar height
              display: 'flex',
              alignItems: 'center',
              flex: '0 0 auto',
              overflowX: 'visible',   // allow horizontal overflow
              overflowY: 'hidden',    // prevent vertical overflow
              position: 'relative',
              width: 'auto',          // let content determine width
              // Calculate width to account for 1.35x scale
              // Assuming logo is roughly 120px wide, scaled to 162px
              minWidth: { xs: 110, md: 165 }, // xs: 80*1.35, md: 120*1.35
            }}
          >
            <img
              src={logoUrl}
              alt="TEMPLLO logo"
              style={{
                height: '100%',
                width: 'auto',
                display: 'block',
                maxHeight: 84,
                minHeight: 56,
                transform: 'scale(1.35)',
                transformOrigin: 'left center',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              ml: 4,
              gap: { xs: 1, md: 2 },
            }}
          >
            {sectionData.map(section => (
              <MuiButton
                key={section.id}
                color="inherit"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 20 },
                  px: { xs: 1.5, md: 2.5 },
                  py: 1,
                  borderRadius: 2,
                  letterSpacing: 1,
                  fontFamily: "'Space Grotesk', 'Poppins', 'Helvetica Neue', Arial, sans-serif",
                  '&:hover': {
                    bgcolor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                  },
                  transition: 'background 0.2s, color 0.2s',
                }}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </MuiButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Add top padding so content is not hidden behind the fixed header */}
      <Box sx={{ height: { xs: 56, md: 84 } }} />
      {/* Infinite scroll sections with refs for navigation */}
      <InfiniteScrollSections
        sections={sectionData.map(section => ({
          ...section,
          content: (
            <div ref={sectionRefs.current[section.id]}>
              {section.content}
            </div>
          ),
        }))}
        repeat={3}
      />
    </>
  );
}
