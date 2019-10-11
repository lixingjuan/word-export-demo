const {
    override,
    fixBabelImports,
    addLessLoader,
    overrideDevServer
} = require("customize-cra");

const devServerConfig = () => config => {
    return {
        ...config,
        proxy: {
            "/admin": {
                // target: "http://172.20.91.211:10062",
                target: "http://111.230.168.107:13011",
                ws: true
            }
        }
    };
};
const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};
module.exports = {
    webpack: override(
        // 关闭mapSource
        rewiredMap(),
        fixBabelImports("import", {
            libraryName: "antd",
            libraryDirectory: "es",
            style: true // change importing css to less
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: {"@ant-prefix": "TUI"}
        })
    ),
    devServer: overrideDevServer(devServerConfig())
};