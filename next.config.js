const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
}

module.exports = {
  assetPrefix: assetPrefix,
  images: {
    loader: 'imgix',
    path: 'eduardomessias.imgix.net',
  },
}
