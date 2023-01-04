import type { InstinctType, CreateElementFunc, CreateElementObjectType, CreateElementInnerType, Props, Children, } from '../types/index';
import { isTextNode, isElement } from '../utils/helpers';

const createElement: CreateElementFunc = (
  type: CreateElementInnerType,
  props: Props,
  ...children: Children[]
  ): CreateElementObjectType => {
  if (props === null) {
    props = {};
  }
  
  const instinctElement: CreateElementObjectType = {
      type,
      props: {
        ...props,
        children: children.map(child => {
          if (isElement(child)) {
            return child;
          } else if (isTextNode(child)) {
            return document.createTextNode("");
          }
        })
      },
    };
  
    const frozenElement = Object.freeze(instinctElement);
    return frozenElement;
  };

  const Instinct: InstinctType = {
    createElement,
  };