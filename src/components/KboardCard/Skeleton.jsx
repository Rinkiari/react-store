import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={330}
    height={440}
    viewBox="0 0 330 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="48" y="244" rx="4" ry="4" width="260" height="23" />
    <rect x="27" y="26" rx="10" ry="10" width="299" height="199" />
    <rect x="47" y="277" rx="10" ry="10" width="260" height="34" />
    <rect x="92" y="317" rx="5" ry="5" width="171" height="21" />
    <rect x="86" y="353" rx="10" ry="10" width="186" height="38" />
  </ContentLoader>
);

export default Skeleton;
