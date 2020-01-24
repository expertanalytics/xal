# expertanalytics.no [![builds.sr.ht status](https://builds.sr.ht/~eigil/xal/.build.yml.svg)](https://builds.sr.ht/~eigil/xal/.build.yml)

## Editing your bio

TLDR: follow the patterns you can see in `content/about/employees`.

```sh
$ hugo new about/employees/<your-name>/index.md # This will be part of the URL
$ cp /path/to/your/face.png content/about/employees/<your-name>/
```

Then make sure `index.md` is set up with something like this in the header:

```
title: "your name"
date: yyyy-mm-dd
resources:
  - name: photo
    src: <something>.png
linkedin: https://www.linkedin.com/in/<something>
email: <your-name>@xal.no
```

The date used should preferably be your date of employment in XAL.

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
which serves the page at `localhost:1313` with hot reloading and drafts enabled
(the `-D`). Note that this will only allow you to connect to the server though
localhost. If you need to access from e.g. a mobile device, find your IP
address and run
```sh
$ hugo server hugo --bind=your.ip.addess.goes.here -D
```

## Checking your changes

You can check your PR by opening the following page in your selection of browsers and devices:
```
http://<branch_name>.pr.dev.xal.no
```
Remember to check with both a computer and a phone (and preferably a couple of different browsers).

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

