/**
 * Created  on 2018/7/31.
 * by leilei
 */
 const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
      config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
};