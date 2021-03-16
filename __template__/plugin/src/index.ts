import { Editor } from 'slate';

const plugin = <T extends Editor>(editor: T) => {
  const e = editor;
  return e;
};

export default plugin;
