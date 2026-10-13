import type { Project } from '@/types/data';

export type PortfolioProject = Project & {
  category: string;
  status?: string;
  imgAlt?: string;
  actions: { label: string; href: string; external?: boolean }[];
};

const projectsData: PortfolioProject[] = [
  {
    type: 'self',
    title: 'AI Media Production System',
    category: 'AI Creative Workflow / Media Engineering',
    status: 'Personal project · actively used · management/editor interface in progress',
    description:
      'An AI-assisted production workflow for English-learning videos, from topic and dialogue generation through cross-model review, TTS, visual assets, Remotion composition, human approval, and publishing. The workflow is actively used; its management and editor interface is still in progress.',
    imgSrc: '/static/images/projects/english-in-a-moment-channel.png',
    imgAlt: 'Screenshot of the English in a Moment YouTube channel and its published learning videos',
    url: '/blog/ai-media-production-workflow',
    builtWith: ['TypeScript', 'AI Agents', 'LLM APIs', 'TTS', 'Remotion', 'Cloudflare R2', 'Workers', 'YouTube API'],
    actions: [
      { label: 'Case Study', href: '/blog/ai-media-production-workflow' },
      { label: 'YouTube Channel', href: 'https://www.youtube.com/@English-in-a-Moment', external: true },
    ],
  },
  {
    type: 'self',
    title: 'LingoBitz: Interactive Language Learning',
    category: 'Interactive Web Product / AI-Assisted Learning',
    description:
      'An interactive language-learning product that turns video into sentence-by-sentence listening practice. Learners follow synchronized transcripts, type what they hear, and get immediate feedback, supported by a background transcription and translation pipeline.',
    imgSrc: '/static/images/projects/lingobitz-dictation.png',
    url: '/blog/lingobitz-dictation',
    repo: 'https://github.com/ChunHao-dev/LingoBitz-Dictation-Pro',
    builtWith: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS SQS', 'Cloudflare R2', 'Node.js'],
    actions: [
      { label: 'Live Demo', href: 'https://www.lingobitz.com', external: true },
      { label: 'Case Study', href: '/blog/lingobitz-dictation' },
      { label: 'GitHub', href: 'https://github.com/ChunHao-dev/LingoBitz-Dictation-Pro', external: true },
    ],
  },
  {
    type: 'self',
    title: 'Sky Scraper: MCP Flight Search Agent',
    category: 'AI Tooling / Browser Automation',
    description:
      'A browser-integrated flight search tool that combines network inspection, a Chrome Extension, and MCP to collect structured itinerary and pricing results on demand for AI-assisted comparison.',
    imgSrc: '/static/images/projects/sky-scraper-architecture.png',
    url: '/blog/sky-scraper-mcp-flight-search-agent',
    builtWith: ['TypeScript', 'MCP', 'Chrome Extension APIs', 'Chrome DevTools Protocol', 'WebSocket', 'Node.js'],
    actions: [{ label: 'Case Study', href: '/blog/sky-scraper-mcp-flight-search-agent' }],
  },
];

export default projectsData;
