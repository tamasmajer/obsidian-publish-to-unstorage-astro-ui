import { unified } from 'unified'
import remarkParse from 'remark-parse'
// import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

const parser = await unified()
    .use(remarkParse)
    // .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)

export default async function process(markdown) {
    const html = await parser.process(markdown)
    return html
}



