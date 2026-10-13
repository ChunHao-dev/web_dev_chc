import type { PortfolioProject } from '@/data/projectsData';

import { Image, Link } from '@/components/ui';

const ProjectCard = ({ project }: { project: PortfolioProject }) => {
  const { title, category, status, description, imgSrc, imgAlt, builtWith, actions } = project;
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-gray-200 shadow-nextjs transition-shadow focus-within:ring-2 focus-within:ring-primary-500 hover:shadow-lg dark:border-gray-700 dark:shadow-nextjs-dark">
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          alt={imgAlt ?? `${title} project preview`}
          src={imgSrc}
          className="h-full w-full"
          width={1088}
          height={612}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-primary-700 dark:text-primary-300 mb-2 text-sm font-semibold uppercase tracking-wide">
          {category}
        </p>
        {status && <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{status}</p>}
        <h2 className="mb-3 text-xl font-bold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl">
          {title}
        </h2>
        <p className="mb-5 text-base leading-7 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2" aria-label={`${title} technology stack`}>
          {builtWith.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              {tool}
            </span>
          ))}
        </div>
        <nav
          aria-label={`${title} links`}
          className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-200 pt-4 dark:border-gray-700"
        >
          {actions.map(({ label, href, external }) => (
            <Link
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-primary-700 dark:text-primary-300 min-h-11 py-2 text-base font-semibold underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </article>
  );
};

export default ProjectCard;
