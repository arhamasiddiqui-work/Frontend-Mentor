"use client";

import SelectFile from "@/components/file";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WriteHeader from "@/components/web/medium/Writeheader/component";
import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from "sonner";

const Editor = dynamic(
  () => import("@/components/web/medium/editor/component"),
  { ssr: false },
);

export default function WritePage() {
  const handleCreatePost = () => {
    if (!title.trim() || !hasImage || !hasContent) {
      toast.error("Please fill in the required fields");
      return;
    }

    toast.success("Post published!");
  };
  const [title, setTitle] = useState("");
  const [hasImage, setHasImage] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <WriteHeader />
      <div className="mt-12 px-4">
        <h1 className="text-3xl font-semibold tracking-tight">New Post</h1>
      </div>

      <div className="border-chart-5 mx-auto mt-12 flex max-w-3xl flex-col gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground mt-1 text-sm">
            Select a cover image.
          </p>
          <SelectFile setHasImage={setHasImage} />
        </div>
        <div className="flex">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
            className="border-none shadow-none focus-visible:ring-1"
          />
          <Input
            value={title.toLowerCase().replaceAll(" ", "-")}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Slug"
            className="border-none shadow-none focus-visible:ring-1"
          />
        </div>
        <Editor setHasContent={setHasContent} />
        <Button
          variant="secondary"
          className="mx-w-3xl mx-auto"
          onClick={handleCreatePost}
        >
          Create Post
        </Button>
      </div>
    </div>
  );
}

/* <div className="mt-8 flex gap-2">
          <Button variant="secondary">React</Button>

          <Button variant="secondary">Next.js</Button>

          <Button variant="secondary">Programming</Button>
        </div>

        <div className="mt-10 flex items-center gap-3 border-t pt-6">
          <Button
            variant="outline"
            size="icon"
          >
            <Heart />
          </Button>

          <Button
            variant="outline"
            size="icon"
          >
            <MessageCircle />
          </Button>

          <Button
            variant="outline"
            size="icon"
          >
            <Bookmark />
          </Button>

          <Button
            variant="outline"
            size="icon"
          >
            <Share2 />
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-300" />

          <div>
            <p className="font-semibold">Anonymous</p>

            <p className="text-sm text-gray-500">5 min read · Aug 6, 2026</p>
          </div>
        </div> */
