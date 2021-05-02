const fs = require("fs");
const { toFancyPlatform, toFancyArch } = require('pkg-fetch/lib-es5/system');
const { hash } = require('pkg-fetch/lib-es5/utils');

async function main() {
  console.log(`mock build to quickly test the github workflow`);

  const { version } = process;
  const platform = toFancyPlatform(process.platform);
  const arch = toFancyArch(process.arch);

  fs.mkdirSync(`dist`, { recursive: true });
  const fpath = `dist/node-${version}-${platform}-${arch}`;
  const data = 'some string';
  const encoding = 'utf8';
  fs.writeFileSync(fpath, data, { encoding });
  const checksum = await hash(fpath);
  fs.writeFileSync(`${fpath}.sha256sum`, checksum, { encoding });
}

main().catch(console.error);
