const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@chakra-ui/storybook-addon'
  ],
  framework: "@storybook/react",
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      include: /node_modules/,
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  }
}
