// You are implementing your own HTML editor. To make it more comfortable for developers you would
// like to add an auto-completion feature to it.

// Given the starting HTML tag, find the appropriate end tag which your editor should propose.

// If you are not familiar with HTML, consult with this note.

// Example

// For startTag = "<button type='button' disabled>", the output should be
// htmlEndTagByStartTag(startTag) = "</button>";
// For startTag = "<i>", the output should be
// htmlEndTagByStartTag(startTag) = "</i>".
function htmlEndTagByStartTag(startTag) {
  let tags = startTag.match(/<[a-zA-Z](.*?[^?])?>/g);
  let output = "";
  tags &&
    tags.reverse().forEach((tag) => {
      tag = tag.split(" ");
      let closeTag =
        tag[0].charAt(0) +
        "/" +
        tag[0].slice(1) +
        (tag.length === 1 ? "" : ">");
      output += startTag.indexOf(closeTag) === -1 ? closeTag : "";
    });
  return output;
}
