import React from 'react';
import { BentoBox } from './BentoBox';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  longDescription?: string;
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const convertMarkdownLinkToJSX = (text: string): React.ReactNode => {
  // Regular expression to match Markdown-like links
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  let lastIndex = 0;
  const parts: React.ReactNode[] = [];

  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    if (lastIndex < match.index) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {linkText}
      </a>
    );
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

export function ProjectCard({
  title,
  description,
  tags,
  longDescription,
  features = [],
  demoUrl,
  githubUrl
}: ProjectCardProps) {
  const modalId = `modal-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <>
      <BentoBox
        className="flex flex-col gap-4 cursor-pointer"
        onClick={() => (document.getElementById(modalId) as HTMLDialogElement)?.showModal()}
      >
        <h3 className="text-xl font-bold text-base-content">{title}</h3>
        <p className="text-base-content/80">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-base-300 text-base-content rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </BentoBox>

      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{longDescription || description}</p>

          {features.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside">
                {features.map((feature, index) => (
                  <li key={index}>{convertMarkdownLinkToJSX(feature)}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-action">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                GitHub
              </a>
            )}
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}