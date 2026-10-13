import { genPageMetadata } from 'app/seo';

import projectsData from '@/data/projectsData';
import ProjectCard from '@/components/project/ProjectCard';

const pageDescription = 'Selected projects in AI, creative tooling, and web engineering.';
const projectsPreviewImage = 'https://blog.chcstudio.net/static/images/projects/english-in-a-moment-channel.png';

export const metadata = genPageMetadata({
  title: 'Projects',
  description: pageDescription,
  image: projectsPreviewImage,
  alternates: { canonical: 'https://blog.chcstudio.net/en/projects' },
  openGraph: {
    title: "Projects | ChunHao's Blog - Coding Journey",
    description: pageDescription,
    url: 'https://blog.chcstudio.net/en/projects',
    siteName: "ChunHao's Blog - Coding Journey",
    images: [projectsPreviewImage],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: "Projects | ChunHao's Blog - Coding Journey",
    description: pageDescription,
    card: 'summary_large_image',
    images: [projectsPreviewImage],
  },
});

export default function Projects() {
  const sideProjects = projectsData.filter(({ type }) => type === 'self');

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{pageDescription}</p>
          <p className="max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
            Product-minded software engineer building web products, AI workflows, and developer tools.
          </p>
        </div>

        <div className="container py-8 sm:py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
