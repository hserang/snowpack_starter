module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: { esmodules: true },
                bugfixes: true,
                modules: process.env.NODE_ENV === 'test' ? 'auto' : false
            }
        ],
        ['@babel/preset-react', { runtime: 'automatic' }],
        ['@babel/preset-typescript']
    ]
};
