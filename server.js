const { existsSync } = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const root = __dirname;
const nextBin = path.join(root, 'node_modules', '.bin', 'next');
const lockfile = path.join(root, 'package-lock.json');
const buildManifest = path.join(root, '.next', 'prerender-manifest.json');

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function ensureDependencies() {
  if (existsSync(nextBin)) {
    return;
  }

  if (!existsSync(lockfile)) {
    console.error('next is not installed and package-lock.json is missing.');
    process.exit(1);
  }

  console.log('Installing dependencies with npm ci...');
  run('npm', ['ci']);
}

function ensureBuild() {
  if (existsSync(buildManifest)) {
    return;
  }

  console.log('Production build output missing; running next build...');
  run(nextBin, ['build']);
}

function start() {
  const port = process.env.PORT || '3000';
  run(nextBin, ['start', '-H', '0.0.0.0', '-p', port]);
}

ensureDependencies();
ensureBuild();
start();
