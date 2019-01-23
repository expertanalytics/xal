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

## Requirements

For template creation and local build install `hugo` https://gohugo.io/getting-started/installing/:

#### Linux:
```
sudo apt-get install hugo
```
or
```
sudo pacman -Syu hugo
```
or what ever creazy pkg manger you use.

#### Mac:
If you have `brew`:
```
brew install hugo
```
if not get `brew`! Or Linux ;)

