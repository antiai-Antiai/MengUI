import React from 'react'
import { CSSTransition } from 'react-transition-group' 

const Transition = (props) => {
  const {
    children,
    classNames,
    animation,
    ...restProps
  } = props
  return (
    <CSSTransition
        timeout={10} 
        classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition