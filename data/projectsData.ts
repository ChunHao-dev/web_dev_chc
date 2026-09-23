import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'self',
    title: 'Sky Scraper: MCP Flight Search Agent',
    description:
      'A browser-based flight search system that uses agent-browser for network investigation, collects live results through a Chrome Extension, and exposes normalized flight data through MCP.',
    imgSrc: '/static/images/projects/sky-scraper-architecture.png',
    url: '/blog/sky-scraper-mcp-flight-search-agent',
    builtWith: ['MCP', 'Chrome Extension', 'CDP', 'WebSocket', 'Node.js'],
  },
  {
    type: 'self',
    title: 'Dictation Language Learning',
    description:
      'Choose a video and improve your listening skills + through sentence-by-sentence dictation practice',
    imgSrc: '/static/images/projects/dictation.png',
    repo: 'crazycjh/language-learning-transcribe',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Cloudflare'],
  },
];

export default projectsData;
