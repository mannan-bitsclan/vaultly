import { useWindowWidth } from "./useWindowWidth";

export function useResponsive() {
  const width = useWindowWidth();

  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isSmallDesktop: width >= 1024 && width < 1280,
    isDesktop: width >= 1024,
    isLargeDesktop: width >= 1280,
    width,
  };
}
