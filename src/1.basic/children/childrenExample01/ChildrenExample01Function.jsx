import React from 'react';

export default function ChildrenExample01Function(props) {
  
  console.log(props);

  return <p>{props.children}</p>;
};
