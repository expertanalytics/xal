// Index uses title as a reference
const postsByTitle = posts.reduce((acc, curr) => {
    acc[curr.title] = curr;
    return acc;
}, {});

elasticlunr.clearStopWords()
async function loadIndex() {
    const res = await fetch('/gen/index.json')
    const json = await res.json()
    return elasticlunr.Index.load(json)
}

const box = document.querySelector('#search-field')
const resultBox = document.querySelector('#search-popup')
const resultBoxContent = document.querySelector('#search-popup-content')
box.addEventListener('focus', e => {
    resultBox.classList.add('visible-popup')
    resultBoxContent.innerHTML = 'Type to search.'
})

document.addEventListener('click', e => {
    e.stopPropagation()
    if (resultBox.contains(e.target) || box.contains(e.target)) {
    } else {
        resultBox.classList.remove('visible-popup');
    }
})

loadIndex().then(index => {
    box.addEventListener('input', e => {
        resultBoxContent.innerHTML = e.target.value
        const matches = search(index, e.target.value)
        updateDOM(matches)
    })
})


function search(index, searchWord) {
    const matches = index.search(searchWord,
        { fields: {
            title: {
                boost: 2
            },
            body: {
                boost: 1
            },
            tags: {
                boost: 3
            }
        }, expand: true
    })
    return matches;
}

function updateDOM(matches) {
    const matchPosts = matches
        .map(m => postsByTitle[m.ref])
        .filter(Boolean)

    if (matchPosts.length > 0) {
        resultBoxContent.innerHTML = matchPosts.map(p => {
            const content = p.content ? p.content + '...' : ''
            return `
<div>
<h3><a href="${p.link}">${p.title}</a></h3>
<p>${content}</p>
</div>
            `
        }).join('')
    } else {
        resultBoxContent.innerHTML = "No hits."
    }
}
