import React from 'react'
import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import gfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import emoji from 'remark-emoji';

const CodeBlock = {
  code({node, inline, className, children, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
    <SyntaxHighlighter 
      style={dracula} 
      language={match[1]} 
      PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>

    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

export default function Project({ projectData }: Data) {

    return (
        <Layout>
            <h1 className="font-sans font-extrabold text-3xl pt-10 md:pt-20 md:text-5xl ">{projectData.title}</h1>
            <small className="font-serif text-sm">{projectData.date}</small>
            <article className='prose dark:prose-dark text-foreground-50 dark:text-darkforeground-50 pt-10 max-w-none'>
                <ReactMarkdown 
                    components={CodeBlock} 
                    remarkPlugins={[remarkMath, gfm, emoji]} 
                    rehypePlugins={[rehypeMathJax]}
                >
                    {projectData.markdown}
                </ReactMarkdown>
            </article>
        </Layout>
        );
}

export async function getStaticProps({ params }: {params: {id: string}}) {
    const projectData = getProjectData(params.id);
    return {
        props: {
            projectData,
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
        paths,
        fallback: false,
    }
}

interface Data {
    projectData: {
        title: string;
        date: string;
        markdown: string;
    }
}