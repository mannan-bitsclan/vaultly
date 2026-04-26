import { useWindowWidth } from "./useWindowWidth";

export function useResponsive() {
  const width = useWindowWidth();

  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
}
