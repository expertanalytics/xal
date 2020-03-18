//const query = new URLSearchParams(window.location.search);
/* const searchString = query.get('q'); */
const searchBox = document.querySelector('#search')
/* searchBox.value = searchString; */
const $target = document.querySelector('#searchresults');

// Index uses title as a reference
const postsByTitle = posts.reduce((acc, curr) => {
    acc[curr.title] = curr;
    return acc;
}, {});

async function loadIndex() {
    const res = await fetch('/gen/index.json')
    const json = await res.json()
    return lunr.Index.load(json)
}

loadIndex().then((index) => {
    searchBox.addEventListener('input', (e) => {
        const matches = index.search(e.target.value,
            { fields: {
                title: {
                    boost: 2
                },
                body: {
                    boost: 1
                }
            },
                expand: true
        })
        updateDOM(matches)
    })
})


function getResults(index, searchString) {
    const matches = index.search(searchString + '*')
    console.log(matches)
}

function updateDOM(matches) {
    const matchPosts = matches
        .map(m => postsByTitle[m.ref])
        .filter(Boolean)

    console.log(matchPosts)
    if (matchPosts.length > 0) {
        $target.innerHTML = matchPosts.map(p => {
            return `
<div>
<h3><a href="${p.link}">${p.title}</a></h3>
<p>${p.content}</p>
</div>
            `
        }).join('')
    }
}
