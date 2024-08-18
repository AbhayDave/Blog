/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
particlesInit(Engine: any): Promise<void>;
particlesLoaded(Container: any): void;
}