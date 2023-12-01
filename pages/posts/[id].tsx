import React from 'react'
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import gfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import emoji from 'remark-emoji';
import remarkImages from 'remark-images';
import remarkFigureCaption from '@microflash/remark-figure-caption';
import Head from 'next/head';

const CodeBlock = {
  code({node, inline, className, children, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
    <SyntaxHighlighter 
      style={dracula} 
      language={match[1]} 
      wrapLongLines={true}
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

export default function Post({ postData }: Data) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1 className="font-sans font-extrabold text-3xl pt-10 md:text-4xl ">{postData.title}</h1>
            <small className="font-serif text-sm">{postData.date}</small>
            <article className='prose dark:prose-dark text-foreground dark:text-darkforeground-50 pt-5 max-w-none'>
                <ReactMarkdown 
                    components={CodeBlock} 
                    remarkPlugins={[remarkImages, remarkMath, gfm, emoji, remarkFigureCaption]} 
                    rehypePlugins={[rehypeMathJax]}
                >
                    {postData.markdown}
                </ReactMarkdown>
            </article>
        </Layout>
        );
}

export async function getStaticProps({ params }: {params: {id: string}}) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

interface Data {
    postData: {
        title: string;
        date: string;
        markdown: string;
    }
}
