const mdPlugins = [
  require('remark-unwrap-images'),
]

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
        mdPlugins,
      }
    },
    'gatsby-plugin-emotion',
  ]
}
