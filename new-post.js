const fs = require("fs");
const slug = require("slug");

const title = process.argv[2];
const dir = "./content/posts";

if (!title) {
  console.log("Please specify the post title.");
  return;
}

const filename = `${slug(title)}`;

const contents = `---
title: ${title}
excerpt:
image:
category:
---

##
`;

fs.writeFile(`${dir}/${filename}.md`, contents, () =>
  console.log(`Created ${dir}/${filename}.md`)
);
