import fs from 'fs';
import path from 'path';

const basePath = process.cwd();
const componentsPath = path.join(basePath, 'components');

const replacePaths = (content: string) => {
    // Replace standard URLs starting with our assets
    const folders = ['thrifthaven', 'mcd', 'neuropods', 'storyboard', 'lifelink', 'rift', 'globotel', 'thumb_'];

    let newContent = content;

    for (const folder of folders) {
        newContent = newContent.replaceAll(`"/${folder}`, `"./${folder}`);
        newContent = newContent.replaceAll(`'/${folder}`, `'./${folder}`);
        newContent = newContent.replaceAll(`\`/${folder}`, `\`./${folder}`);
    }

    return newContent;
};

// Process constants.ts
const constantsFile = path.join(basePath, 'constants.ts');
if (fs.existsSync(constantsFile)) {
    const c = fs.readFileSync(constantsFile, 'utf8');
    fs.writeFileSync(constantsFile, replacePaths(c));
}

// Process components
const files = fs.readdirSync(componentsPath);
for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const p = path.join(componentsPath, file);
        const c = fs.readFileSync(p, 'utf8');
        fs.writeFileSync(p, replacePaths(c));
    }
}

console.log('Fixed asset paths');
