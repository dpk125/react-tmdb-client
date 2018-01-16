module.exports = function(env) {
    return require(`./tools/webpack/webpack.${env}.js`);
};