import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const useBreakpoint = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg}`);

  return { isMobile, isDesktop };
};
