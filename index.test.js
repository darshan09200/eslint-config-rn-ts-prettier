const config = require('./index');
const { ESLint } = require('eslint');
const path = require('path');
const fs = require('fs');

describe('eslint-config-rn-ts-prettier', () => {
  it('should export an object', () => {
    expect(typeof config).toBe('object');
  });

  it('should have expected top-level keys', () => {
    expect(config).toHaveProperty('env');
    expect(config).toHaveProperty('extends');
    expect(config).toHaveProperty('rules');
  });

  it('should lint a sample file without crashing', async () => {
    const eslint = new ESLint({
      useEslintrc: false,
      overrideConfigFile: path.join(__dirname, 'index.js'),
    });

    // Create a temporary JS file to lint
    const sampleFile = path.join(__dirname, 'sample.js');
    fs.writeFileSync(sampleFile, 'const foo = 1\n');

    const results = await eslint.lintFiles([sampleFile]);
    expect(Array.isArray(results)).toBe(true);
    expect(results[0]).toHaveProperty('messages');

    // Clean up
    fs.unlinkSync(sampleFile);
  });
});
