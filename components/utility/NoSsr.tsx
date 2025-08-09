// file: components/utility/NoSsr.tsx
import React from 'react';

const NoSsr: React.FC<{ children: React.ReactNode }> = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default React.memo(NoSsr, () => true);