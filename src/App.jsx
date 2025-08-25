import { Sun } from "lucide-react";
import React from "react";
import Bio from "./components/Bio";
import { bioData } from "./data/bio";
import { profileData } from "./data/profile";
import Profile from "./components/Profile";
export default function App() {
  return (
    <>
      <Bio bio={bioData} />
      <section className="my-9 text-sm">
        <h3 className="mb-1 dark:text-white">About</h3>
        <div className="text-muted-foreground">
          <p>{bioData.about}</p>
        </div>
      </section>
      <section>
        <h3 className="mb-6 dark:text-white">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {bioData.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-200 px-3 py-1 mb-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-200 cursor-pointer hover:-translate-y-0.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      {profileData.map((content, index) => {
        return <Profile {...content} key={index} />;
      })}
      <section className="my-14 text-sm">
        <h3 className="mb-6 dark:text-white text-[1rem]">Contact</h3>
        <div className="flex flex-col gap-6">
          {bioData.contacts.map((contact, index) => {
            return (
              <div className="flex" key={index}>
                <div className="mr-8 w-full max-w-[100px] dark:text-white/50">
                  {contact.label}
                </div>
                <div className="flex flex-1 flex-col text-slate-700 dark:text-slate-100">
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex hover:underline"
                  >
                    {contact.value}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                        className="fill-current text-slate-900 dark:text-slate-100"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
