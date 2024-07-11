import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface Breadcrumb {
  label: string;
  path: string;
}

export function useBreadcrumbs() {
  const pathname = usePathname();
  // console.log("Start", pathname)

  const breadcrumbs = useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: Breadcrumb[] = [];
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      console.log("Before", currentPath)
      
      // Skip numeric segments (assumed to be dynamic routes)
      if (!isNaN(Number(segment))) {
        return;
      }

      breadcrumbs.push({
        label: segment,
        path: currentPath,
      });
    });
console.log("breadcrumbs", breadcrumbs)
    return breadcrumbs;
  }, [pathname]);

  return breadcrumbs;
}