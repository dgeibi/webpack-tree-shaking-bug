import React, { useEffect, useRef } from 'react';

const getParam = () => {
  if (window.x) {
    return 1;
  }
  return 2;
};

const Inner = () => {
  const { params } = {};
  const { a, b } = params || {};
  const x = useRef();

  const fn = () => {
    getParam();
  };

  useEffect(() => {
    fn();
  }, []);

  return 'hello';
};

const withXX = Comp => props => {
  return React.createElement(Comp, props);
};

export default withXX(Inner);
