import React from 'react';

export default function MenuItem(props) {
  return (
    <li>
      {props.index} - {props.title}
    </li>
  );
}
