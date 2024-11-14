import { BentoBox } from './components/BentoBox';
import { SocialLinks } from './components/SocialLinks';
import { ProjectCard } from './components/ProjectCard';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="p-6 md:p-12">
        <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoBox className="md:col-span-2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-base-content mb-4">
              Hi, I'm <span className="text-primary">Innkeep</span> 👋
            </h1>
            <p className="text-xl text-base-content/80">
              dev, project management, community management
            </p>
          </BentoBox>

          <BentoBox className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
            <img
            src={`/profilepic.png`}
            alt="Profile"
            className="w-full h-full object-cover rounded-3xl"
            />
          </BentoBox>

          <BentoBox className="md:col-span-2" id="about">
            <h2 className="text-2xl font-bold text-base-content mb-4">Currently working on:</h2>
            <p className="text-base-content/80">
              web3 projects: integrating ipfs, evm, soulbound nft certification, refi, & moar
            </p>
          </BentoBox>

          <BentoBox className="flex items-center justify-center">
            <SocialLinks />
          </BentoBox>

          <div id="projects" className="md:col-span-3">
            <h2 className="text-2xl font-bold text-base-content mb-6">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProjectCard
                title="dAcademy"
                description="A decentralized education solution built with IPFS and Soulbound NFTs on Optimism."
                tags={['React', 'Vite', 'IPFS', 'Optimism EVM']}
                longDescription="An decentralized education protocol with features like IPFS, Solidity contracts, soulbound NFT completion badges, and more to come."
                features={[
                  'on [Optimism](https://docs.optimism.io/builders/app-developers/overview)',
                  '[IPFS](https://ipfs.tech/)',
                  'Solidity',
                  'Soulbound NFTs',
                  '[Storacha](https://storacha.network/)',
                  'born from [MetaGame](https://github.com/MetaFam) & [QuestChains](https://github.com/quest-chains)'
                ]}
                demoUrl="https://dacade.my"
                githubUrl="https://github.com/orgs/MetaFam/projects/5"
              />

              <ProjectCard
                title="GreenShill"
                description="An site for shills of GreenPill Network"
                tags={['Astro', 'Tailwind']}
                longDescription="A site built as part of GreenPill Dev Guild for shills of GreenPill Network for writer's guild."
                features={[
                  '[Astro](https://astro.build/)',
                  '[RSS Feeds](https://github.com/MetaFam/rss-proxy)',
                  'Markdown support',
                  'SEO optimization',
                  '[GreenPill Dev Guild](https://github.com/greenpill-dev-guild)',
                  '[GreenPill Network](https://greenpill.network)'
                ]}
                demoUrl="https://innkeeping.github.io/greenshill/"
                githubUrl="https://github.com/Innkeeping/greenshill"
              />

              <ProjectCard
                title="MGIGs"
                description="A slow WIP gig bounty board"
                tags={['React', 'Vite', 'Tailwind', 'Daisy']}
                longDescription="A micro gig board"
                features={[
                  'Open-source',
                  'Gig/Bounty Board',
                  '[Discord API](https://discord.com/developers/docs/reference)',
                  '[XMTP](https://xmtp.org/)',
                  'Web3 [dework alternative](https://dework.xyz/)'
                ]}
                demoUrl="https://innkeeping.github.io"
                githubUrl="https://github.com/Innkeeping"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}