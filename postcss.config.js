module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer')() : null,
    process.env.NODE_ENV === 'production' ? require('@fullhuman/postcss-purgecss')({
      enabled: true,
      content: [
        './templates/**/*.html',
        './templates/**/*.twig'
      ],
      whitelistPatterns: [
        /embed-\w+/,
        /position-\w/,
        /iframe/
    ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }) : null,
  ]
}