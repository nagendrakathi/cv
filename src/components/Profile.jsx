import React from "react";

export default function Profile({ title, items }) {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6 dark:text-white">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 w-full max-w-[100px] dark:text-slate-400">
                {item.date}
              </div>
              <div className="flex flex-1 flex-col">
                <h4 className="dark:text-white">{item.title}</h4>
                {item.percentile ? (
                  <span className="text-muted-foreground">
                    {item.percentile} Percentile
                  </span>
                ) : null}
                <p className="text-muted-foreground mt-0.5">{item.subTitle}</p>
                {item.description ? (
                  <p className="text-muted-foreground mt-0.5">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
