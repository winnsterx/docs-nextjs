import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
const treeData = require("../docs/manifest.json");
const docsDirectory = path.join(process.cwd(), "docs");
let allPaths = [];

function processKeys(obj) {
  allPaths.push(obj["key"].substring(6));

  if (!obj.children) {
    return;
  }
  obj.children.forEach((child) => processKeys(child));
}

export function getAllDocsIds() {
  let obj = treeData[0];
  processKeys(obj);
  return allPaths
    .filter((path) => {
      const pathParams = path.split("/");
      const len = pathParams.length;
      // filters out the heading (i.e. without .md ending)
      if (pathParams[len - 1].includes(".md")) {
        return true;
      }
      return false;
    })
    .map((path) => {
      const pathParams = path.split("/");
      const len = pathParams.length;
      pathParams[len - 1] = pathParams[len - 1].slice(0, -3);
      return {
        params: {
          slug: pathParams,
        },
      };
    });
}

export async function getDocData(id) {
  const fullPath = path.join(docsDirectory, `${id}.md`);

  // id comes in the format /docs/x/y/z
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
