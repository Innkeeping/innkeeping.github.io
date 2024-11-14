/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
  readonly VITE_APPKIT_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}