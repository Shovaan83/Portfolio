import { lazy } from 'react';

// Lazy load components for better performance
export const LazyHero = lazy(() => import('@/components/sections/Hero'));
export const LazyAbout = lazy(() => import('@/components/sections/About'));
export const LazyProjects = lazy(() => import('@/components/sections/Projects'));
export const LazyExperience = lazy(() => import('@/components/sections/Experience'));
export const LazyContact = lazy(() => import('@/components/sections/Contact'));
