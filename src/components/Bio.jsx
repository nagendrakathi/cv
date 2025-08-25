import { Image } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";
export default function Bio({ bio }) {
  return (
    <section className="flex items-center">
      <img
        src={bio.avatar}
        alt="Author"
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
      <div className="ml-4 flex-1">
        <h1 className="mb-0.5 text-xl dark:text-white">{bio.name}</h1>
        <p className="text-muted-foreground text-sm">{bio.jobTitle}</p>
        {bio.website ? (
          <span className="text-muted-foreground bg-gray-400/30 rounded-full px-2 py-1 text-xs cursor-pointer">
            <a href={bio.website} target="_blank" rel="noopener noreferrer" className=""/>
              {bio.website.replace(/(^\w+:|^)\/\//, "").replace("www.", "")}
          </span>
        ) : null}
      </div>
      <ModeToggle />
    </section>
  );
}
