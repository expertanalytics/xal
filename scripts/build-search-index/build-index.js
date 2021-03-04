#!/usr/bin/env node

// Inspured by: 
// https://gist.github.com/HugoDF/aac2e529f79cf90d2050d7183571684b

const fs = require('fs');
const fm = require('front-matter');
const path = require('path')
const {promisify} = require('util');
const elasticlunr = require('elasticlunr');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(dir, subdir);
        return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

async function getAllContentFiles() {
    const files = await getFiles("./content")
    return files.filter(f => path.extname(f) === ".md")
}

async function readFrontMatter(file) {
    const rawFile = await fs.promises.readFile(file, 'utf8')
    const frontMatter = fm(rawFile)

    return {
        ...frontMatter.attributes,
        body: frontMatter.body
    }
}

async function loadPostsWithFrontMatter() {
    const files = await getAllContentFiles()
    const parsedFrontMatters = Promise.all(files.map(readFrontMatter))

    return parsedFrontMatters
}

function makeIndex(posts) {
    elasticlunr.clearStopWords()
    return elasticlunr(function() {
        this.setRef('title');
        this.addField('title');
        this.addField('body');
        this.addField('tags');

        posts.forEach(p => {
            this.addDoc(p);
        });
    });
}


loadPostsWithFrontMatter().then(posts => {
    const indx = makeIndex(posts)
    console.log(JSON.stringify(indx))
})
