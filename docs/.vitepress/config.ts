import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "docss",
  description: "docss 这是一个测试",
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'gg', link: '/gudf' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },

          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/gettingStart' },
          {text: 'test', items: [{text: "df", link: "/test1/ddd"}]}
        ]
      }
    ],
  },
  base: '/docss/'
})

