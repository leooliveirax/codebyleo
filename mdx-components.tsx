import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
// import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => <h1 className="mb-0 pt-12 font-medium" {...props} />,
  h2: (props: HeadingProps) => <h2 className="text-foreground mt-8 mb-3 font-medium" {...props} />,
  h3: (props: HeadingProps) => <h3 className="text-foreground mt-8 mb-3 font-medium" {...props} />,
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => <p className="text-foreground text-base leading-7" {...props} />,
  ol: (props: ListProps) => <ol className="text-foreground list-decimal space-y-2 pl-5" {...props} />,
  ul: (props: ListProps) => <ul className="text-foreground list-disc space-y-1 pl-5" {...props} />,
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-medium" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-foreground hover:text-foreground/70 underline underline-offset-2 decoration-foreground/70";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  },
  //   code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
  //     const codeHTML = highlight(children as string);
  //     return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  //   },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote className="text-foreground ml-[0.075em] border-l-3 pl-4 font-medium" {...props} />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
