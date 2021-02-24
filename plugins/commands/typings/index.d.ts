import { Editor, Node } from 'slate';

export interface IEditor extends Editor {
  bold?: boolean | null;
}

export interface NodeSupplement {
  bold?: boolean;
}

export type INode = Node & NodeSupplement;
