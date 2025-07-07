import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import {Callout} from "@/components/Callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  // h1: ({ className, ...props }) => (
  //     <h1
  //         className={cn(
  //             "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
  //             className
  //         )}
  //         {...props}
  //     />
  // ), if we want to style the mdx components ourself, visit https://github.com/shadcn-ui/taxonomy/blob/main/components/mdx-components.tsx, else just use prose class
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
