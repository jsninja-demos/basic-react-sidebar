import React, { Children } from 'react';

export default function MenuList({ children, list }) {
  const changedChildren = Children.map(children, (child, index) => {
    return React.cloneElement(child, { index });
  });

  return <ul>{changedChildren}</ul>;
  // Таже был в видео такой вариант использования children
  // {list.map(title => children(title))}
}
