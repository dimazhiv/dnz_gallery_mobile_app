module.exports = {
  plugins: [
    ['@babel/plugin-transform-flow-strip-types', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }]
  ],

  presets: ['module:metro-react-native-babel-preset']
};
