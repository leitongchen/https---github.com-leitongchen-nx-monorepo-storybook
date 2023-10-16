module.exports = {
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  stories: ['../../**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
};
