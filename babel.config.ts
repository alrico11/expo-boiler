module.exports = function(api : any) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            // '@screens': './src/screens',
            '@navigation': './src/navigation',
            // '@services': './src/services',
            // '@types': './src/types',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
