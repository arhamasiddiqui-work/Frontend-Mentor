"use client";

import { useEffect, useRef } from "react";

import CodeTool from "@editorjs/code";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";

type Props = {
  setHasContent: (value: boolean) => void;
};
export default function Editor({ setHasContent }: Props) {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (editorRef.current) return;

    editorRef.current = new EditorJS({
      holder: "editorjs",

      placeholder: 'Press "/" for commands',

      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },

        list: {
          class: List,
          inlineToolbar: true,
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
        },

        code: {
          class: CodeTool,
        },
      },
      onChange: async () => {
        const data = await editorRef.current?.save();
        setHasContent((data?.blocks?.length ?? 0) > 0);
      },
    });
  }, [setHasContent]);

  return (
    <div
      id="editorjs"
      className="flex auto-cols-max"
    />
  );
}
