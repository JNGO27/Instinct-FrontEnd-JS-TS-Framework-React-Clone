import { CreateElementObjectType, Children } from "../types/index";

export function isElement(node: Children): node is CreateElementObjectType | CreateElementObjectType[] {
  return typeof node === "object";
}

export function isTextNode(node: Children ): node is Text {
  const TEXT_NODE: 3 = 3;

  if (node instanceof Text) {
    return node.nodeType === TEXT_NODE;
  }

  return false;
}