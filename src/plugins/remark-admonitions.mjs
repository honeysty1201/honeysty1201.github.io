import { visit } from "unist-util-visit";

const ADMONITION_TYPES = new Set(["info", "note", "tip", "warning", "danger"]);

export default function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "containerDirective") return;
      if (!ADMONITION_TYPES.has(node.name)) return;

      const data = node.data || (node.data = {});
      const className = ["admonition", `admonition-${node.name}`];

      data.hName = "aside";
      data.hProperties = {
        className,
        "data-admonition": node.name,
      };

      const firstChild = node.children?.[0];
      if (!firstChild) return;

      if (firstChild.type === "heading") {
        firstChild.type = "paragraph";
      }

      if (firstChild.type === "paragraph") {
        const childData = firstChild.data || (firstChild.data = {});
        childData.hProperties = {
          ...(childData.hProperties || {}),
          className: ["admonition-title"],
        };
      }
    });
  };
}
