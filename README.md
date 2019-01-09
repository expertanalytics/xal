# expertanalytics.no [![Build Status](https://travis-ci.org/expertanalytics/xal.svg?branch=master)](https://travis-ci.org/expertanalytics/xal)

## Editing your bio

TLDR: follow the patterns you can see in `content/about/employees`.

```sh
$ hugo new about/employees/<your-name>/index.md # This will be part of the URL
$ cp /path/to/your/face.png content/about/employees/<your-name>/
```

Then make sure `index.md` is set up with something like this in the header:

```
resources:
  - name: photo
    src: <something>.png
linkedin: https://www.linkedin.com/in/<something>
email: <your-name>@xal.no
```

## Writing news

Create a new page with
```sh
$ hugo new posts/look-ma-im-a-blogger/index.md
```
then write something in it.

## Running locally

Check the output with
```sh
$ hugo server -D
```
which serves the page at `localhost:1313` with hot reloading and drafts enabled (the `-D`).

## Publishing

Pushing to master triggers an automatic deploy through Travis CI
