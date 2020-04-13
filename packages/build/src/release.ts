import os from 'os';
import Config from './config';
import compileExec from './compile-exec';
import zip from './zip';

/**
 * Run the release process.
 *
 * @param {Config} config - the configuration, usually a package.json.
 */
const release = async(config: Config) => {
  const platform = os.platform();

  // 1. Build the executable.
  await compileExec(config.input, config.outputDir, platform);
  // 2. Sign the executable for each OS.
  // 3. Zip the executable.
  await zip(config.input, config.outputDir, platform, config.version);
  // 4. Create & sign the .deb
  // 5. Create & sign the .rpm
  // 6. Create & sign the .msi
  // 
  // If lerna version has been run, then...
  //
  // 1. Publish the .deb
  // 2. Publish the .rpm
  // 3. Publish to Homebrew
  // 4. Upload to download center.
  // 5. Change download center config.
  // 6. Upload download center config.
  // 7. Create Github release.
  // 8. Publish to NPM.
}; 

export default release;
