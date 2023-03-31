import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lightbox Developer Portal",
  description: "A simple guide to help you as the developer to prepare for the job.",
  outDir: 'lightbox',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: 'https://online.rimscentral.com/images/LightBoxLogo.png', 'alt': 'Lightbox Developer Portal' },
    siteTitle: 'Developer Portal',
    outlineTitle: 'Page Content:',
    footer: {
      message: 'Exclusive for Lightbox new employees.',
      copyright: 'Copyright © 2023 Lightbox'
    },
    editLink: {
      pattern: '#',
      text: 'Edit this page on Github'
    },
    nav: nav(),

    sidebar: {
      '/docs/quick-start': sidebarQuickStart(),
      '/docs/onboarding/': sidebarOnboarding(),
      '/docs/onboarding/database/': sidebarDatabases(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Quick Start', link: '/docs/quick-start' },
    {
      text: 'Onboarding',
      items: [
        { text: 'Introduction', link: '/docs/onboarding/' },
        { text: 'Business Context', link: '/docs/onboarding/business/' },
        { text: 'The Databases', link: '/docs/onboarding/database/' },
        { text: 'Local Setup', link: '/docs/onboarding/setup/' },
      ]
    },
  ];
}

function sidebarQuickStart() {
  return [
    {
      text: 'Welcome to Lightbox',
      items: [
        { text: 'Quick Start', link: '/docs/quick-start' },
        {
          text: 'Onboarding',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/docs/onboarding/' },
            { text: 'Business Context', link: '/docs/onboarding/business/' },
            { text: 'The Databases', link: '/docs/onboarding/database/' },
            { text: 'Local Setup', link: '/docs/onboarding/setup/' },
          ]
        },
        { text: 'Glossary', link: '/docs/onboarding/business/glossary' },
      ]
    }
  ];
}

function sidebarOnboarding() {
  return [
    {
      text: 'Onboarding',
      items: [
        { text: 'Introduction', link: '/docs/onboarding/' },
        { text: 'Business Context', link: '/docs/onboarding/business/' },
        { text: 'The Databases', link: '/docs/onboarding/database/' },
        { text: 'Local Setup', link: '/docs/onboarding/setup/' },
      ]
    },
    {
      text: 'Configurations',
      items: [
        { text: 'The VPN', link: '/docs/onboarding/setup/vpn' },
      ]
    },
    { text: 'Quick Start', link: '/docs/quick-start' },
    { text: 'Glossary', link: '/docs/onboarding/business/glossary' },
  ];
}

function sidebarDatabases() {
  return [
    {
      text: 'Onboarding',
      items: [
        { text: 'Introduction', link: '/docs/onboarding/' },
        { text: 'Business Context', link: '/docs/onboarding/business/' },
        { text: 'The Databases', link: '/docs/onboarding/database/' },
        { text: 'Local Setup', link: '/docs/onboarding/setup/' },
      ]
    },
    {
      text: 'The Databases',
      items: [
        { text: 'Introduction', link: '/docs/onboarding/database/' }
      ]
    },
    {
      text: 'The Schemas',
      items: [
        { text: 'Accounts', link: '/docs/onboarding/database/schemas/accounts' },
      ]
    },
    { text: 'Quick Start', link: '/docs/quick-start' },
    { text: 'Glossary', link: '/docs/onboarding/business/glossary' },
  ];
}
