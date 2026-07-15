/// <reference types="vite/client" />

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}
