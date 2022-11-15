const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

let assetPrefix = `/${repo}/`

module.exports = {
  assetPrefix: assetPrefix,
  images: {
    loader: 'imgix',
    path: 'eduardomessias.imgix.net',
  },
}
