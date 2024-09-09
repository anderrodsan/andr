import { options } from "@/db/bookmarks";
import { Bookmark } from "@/lib/types";
import { ExternalLink, Tag } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BookmarkCard({
  bookmark,
  bookmarks,
  index,
}: {
  bookmark: Bookmark;
  bookmarks: Bookmark[];
  index: number;
}) {
  const tag = options.find((option) => option.name === bookmark.tags[0]);

  return (
    <div className="space-y-2">
      {index !== 0 ? (
        <div>
          {bookmark.tags[0] !== bookmarks[index - 1].tags[0] && (
            <div className="flex items-center my-2 gap-2 p-3 border-b bg-muted rounded-xl">
              {tag && <tag.icon size={16} />}
              <p className="text-sm font-bold">{bookmark.tags}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center mb-2 gap-2 p-3 border-b bg-muted rounded-xl">
          {tag && <tag.icon size={16} />}
          <p className="text-sm font-bold">{bookmark.tags}</p>
        </div>
      )}
      <Link href={bookmark.url} target="_blank">
        <div className="group ml-6 px-3 py-3 rounded-xl hover:bg-muted/50 transition duration-300 cursor-pointer flex gap-2 justify-between items-center">
          <p className="text-sm group-hover:underline">{bookmark.title}</p>
          <ExternalLink
            size={16}
            className="opacity-0 group-hover:opacity-50"
          />
        </div>
      </Link>
    </div>
  );
}
