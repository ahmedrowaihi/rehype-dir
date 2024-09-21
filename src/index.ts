import type { Parent } from 'unist';
import { visit } from 'unist-util-visit';

type ParentNode = Omit<Parent, 'children'> & {
  children: ParentNode[];
  properties?: { dir?: string };
  tagName: string;
};

export default function rehypeDir(options: {
  forceLTR?: string[];
  forceRTL?: string[];
  forceAuto?: string[];
  topLevelAuto?: boolean;
}) {
  return (tree: ParentNode) => {
    if (!tree.children.length || tree.children[0].type !== 'element') return;

    if (tree.children[0].tagName === 'section') {
      tree.children = tree.children[0].children;
    }

    const setDir = (node: ParentNode, dir: string) => {
      node.properties = node.properties || {};
      node.properties.dir = dir;
    };

    const forceLTR = new Map(options?.forceLTR?.map((tag: string) => [tag, true]));

    const forceAuto = new Map(options?.forceAuto?.map((tag: string) => [tag, true]));

    const forceRTL = new Map(options?.forceRTL?.map((tag: string) => [tag, true]));

    visit(tree, 'element', (node: ParentNode) => {
      if (forceAuto.get(node.tagName)) {
        setDir(node, 'auto');
      } else if (forceLTR.get(node.tagName)) {
        setDir(node, 'ltr');
      } else if (forceRTL.get(node.tagName)) {
        setDir(node, 'rtl');
      } else {
        setDir(node, 'inherit');
      }
    });

    if (options?.topLevelAuto) {
      setDir(tree, 'auto');
    }
  };
}
