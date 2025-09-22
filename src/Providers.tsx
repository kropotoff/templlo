import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const qc = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={qc}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}