import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "welbourne.ai",
  DESCRIPTION: "Welcome to welbourne.ai, a portfolio and blog for designers and developers.",
  AUTHOR: "Alexander Welbourne",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "dev@welbourne.ai",
    HREF: "mailto:dev@welbourne.ai",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "alexanderwelbourne",
    HREF: "https://github.com/alexanderwelbourne"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Alex Welbourne",
    HREF: "https://www.linkedin.com/in/alex-welbourne-598ba5191/",
  },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

