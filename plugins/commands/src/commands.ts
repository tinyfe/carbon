import { Editor, Transforms, Text } from 'slate';
import { IEditor, INode } from 'typings';

class Commands {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  isBoldMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (nodes: INode) => nodes?.bold === true,
      universal: true,
    });

    return !!match;
  }

  toggleBoldMark() {
    const isActive = this.isBoldMarkActive(this.editor);

    Transforms.setNodes(
      this.editor,
      {
        bold: isActive ? null : true,
      } as IEditor,
      {
        match: n => Text.isText(n),
        split: true,
      },
    );
  }
}

export default Commands;
