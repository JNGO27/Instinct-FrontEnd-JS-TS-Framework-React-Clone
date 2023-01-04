export type InstinctType = {
  createElement: CreateElementFunc;
};

export type CreateElementFunc = (
  type: CreateElementInnerType,
  props: Props,
  children?: Children[],
) => CreateElementObjectType;

export type CreateElementInnerType = keyof HTMLElementTagNameMap;

export type CreateElementObjectType = {
  type: CreateElementInnerType;
  readonly props?: Props;
};

export type Props = { children?: Children; } | null;

export type Children =
  CreateElementObjectType |
  Text                    |
  Children[]              ;
