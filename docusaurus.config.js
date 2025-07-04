// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NCHL API Documentation',
  tagline: 'Digital bridges enabling interactions.',
  favicon: 'img/favicon_bak.ico',

  // Set the production url of your site here
  url: 'https://doc.connectips.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nchl', // Usually your GitHub org/user name.
  projectName: 'API Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    "https://cdn.tailwindcss.com",
    {
      src: "https://cdn.tailwindcss.com",
      async: true,
      onload: "tailwind.config = { theme: { extend: {} } }",
    },
    {
      src: '/js/authGuard.js', // Load our auth script
      async: false,
    },
  ],



  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

//   admin: '/docs/intro',
//   NPI_QR_GW: '/docs_npiqrgt/intro',
//  CROSSBORDER: '/docs_crs/intro',
//   NPI: '/docs_npi/intro',
//   NPS: '/docs_nps/intro',
//   WALLET: '/docs_wallet/intro',
plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'npiqrgt', // Unique ID for docs_npi
      path: 'docs_npiqrgt',
      routeBasePath: 'docs_npiqrgt',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'crossborder', // Unique ID for docs_crossborder
      path: 'docs_crossborder',
      routeBasePath: 'docs_crossborder',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'npi', // Unique ID for docs_npi
      path: 'docs_npi',
      routeBasePath: 'docs_npi',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'nps', // Unique ID for docs_nps
      path: 'docs_nps',
      routeBasePath: 'docs_nps',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'wallet', // Unique ID for docs_wallet
      path: 'docs_wallet',
      routeBasePath: 'docs_wallet',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'npiremit', // Unique ID for docs_wallet
      path: 'docs_npiremit',
      routeBasePath: 'docs_npiremit',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'nepalpayqr', // Unique ID for docs_wallet
      path: 'docs_nepalpay_qr',
      routeBasePath: 'docs_nepalpay_qr',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'nchlgw', // Unique ID for docs_wallet
      path: 'docs_gw',
      routeBasePath: 'docs_gw',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
],

  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nchl-social-card.png',
      themes: ['@docusaurus/theme-live-codeblock'],
      navbar: {
        // title: 'NCHL',
        logo: {
          href:"#",
          alt: 'NCHL',
          src: '/img/banner/logo.png',
        },
        items: [
          {
            href: '/',  // We can keep this href as '#' because we only need to capture the click
            label: 'LogOut',
            position: 'right',
          
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       // {
        //       //   label: 'Blog',
        //       //   to: '/blog',
        //       // },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} NCHL `,
      },
      styles: [
        // Add the path to your custom CSS file
        'src/css/custom.css',
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;

// module.exports = {
//   // Other config settings...
//   styles: [
//     // Existing styles...
//     'src/css/custom.css', // Include your custom CSS here
//   ],
// };
