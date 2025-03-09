import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeTransition.css';

const FadeTransition = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={300}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

export default FadeTransition;