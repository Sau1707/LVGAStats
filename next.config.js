/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig

const withTM = require('next-transpile-modules') // pass the modules you would like to see transpiled

module.exports = withTM(['react-d3-speedometer', 'lodash-es'], {
    resolveSymlinks: false,
})
