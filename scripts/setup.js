import { writeFileSync, existsSync } from 'fs';

// Create necessary files and directories
if (!existsSync('.git')) {
  writeFileSync('.git/config', '[core]\n\tbare = false\n\trepositoryformatversion = 0\n\tfilemode = true');
  writeFileSync('.git/HEAD', 'ref: refs/heads/main\n');
  console.log('Created minimal git structure');
}

console.log('Setup completed successfully!');