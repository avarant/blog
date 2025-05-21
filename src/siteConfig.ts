import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "avarant",
  description:
    "avarant's blog",
  href: "https://github.com/avarant",
  author: "avarant",
  locale: "en-CA",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/avarant",
  },
};
