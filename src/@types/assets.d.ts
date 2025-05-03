declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  const content: any;
  const viewBox: string;
  const width: string;
  const height: string;
  const space: string;
  const xlink: string;
  const xmlns: string;
  const version: string;
  export default content;
  export default src;
}

declare module '*.png' {
  const content: any;
  export default content;
}
