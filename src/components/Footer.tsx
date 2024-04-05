import Link from 'next/link';
import TwitterLogo from './logos/TwitterLogo';
import GitHubLogo from './logos/GitHubLogo';
import DiscordLogo from './logos/DiscordLogo';
import YouTubeLogo from './logos/YouTube';
import { footerlinks } from '@/constants/footerlinks';

export default function Footer() {
  return (
    <footer className="h-auto bg-gray-dark-100">
      <div className="container relative mx-auto py-12 px-6 lg:px-16 xl:px-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <div className="flex items-center">
                <div className="rounded-full bg-red-800 w-4 h-4" />
                <span className="text-2xl font-medium">darkroomFinder</span>
              </div>
            </Link>

            <div className="flex gap-5">
              <Link href="https://www.twitter.com">
                <TwitterLogo className="w-5 h-5 text-gray-dark-1000 hover:text-gray-dark-1200" />
              </Link>
              <Link href="https://www.github.com">
                <GitHubLogo className="w-5 h-5 text-gray-dark-1000 hover:text-gray-dark-1200" />
              </Link>
              <Link href="https://www.discord.com">
                <DiscordLogo className="w-5 h-5 text-gray-dark-1000 hover:text-gray-dark-1200" />
              </Link>
              <Link href="https://www.youtube.com">
                <YouTubeLogo className="w-5 h-5 text-gray-dark-1000 hover:text-gray-dark-1200" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {footerlinks.map(({ section, links }) => (
                <div key={section}>
                  <h6 className="text-gray-dark-1200 text-base">{section}</h6>
                  <ul className="mt-4 space-y-2">
                    {links.map(({ name, url }) => (
                      <li key={name}>
                        <Link href={url}>
                          <span className="block text-sm text-gray-dark-1000 hover:text-gray-dark-1200 ">
                            {name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-gray-dark-500 to-transparent"></div>
        <div className="pt-8 text-center">
          <small className="text-xs text-gray-dark-1000">
            © {new Date().getFullYear()} Darkroom Finder
          </small>
        </div>
      </div>
    </footer>
  );
}
