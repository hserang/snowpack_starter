/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' }
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        ['@snowpack/plugin-babel', { input: ['.js'] }]
    ],
    install: ['react/jsx-runtime'],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
    }
};
