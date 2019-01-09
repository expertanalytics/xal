---
title: "Geographical Information Systems"
date: 2019-01-05T14:17:12+01:00
weight: 30
---

A geographic information system (GIS) is a system designed to capture,
store, manipulate, analyze, manage, and present all types of spatial
or geographical data. In other words, if a calculations involves using
a map, you need to use GIS.

## Course Content

In this course, we will give an introduction to GIS. We will go
through both how raster images and vector information can be imported,
manipulated, brought together, visualized and exported.

## Prerequisite

The course requires familiarity with the
[Numpy](https://www.numpy.org/), [Scipy](https://scipy.org/) and
[Matplotlib](https://matplotlib.org/) libraries, introduced
[here](/training/python/numerical/).

## Duration: 2 hours

## Tools Introduced
Rasterio
: [Rasterio](https://github.com/mapbox/rasterio) employs
  [GDAL](https://gdal.org/) under the hood for file I/O and raster
  formatting. Its functions typically accept and return Numpy
  ndarrays. Rasterio is designed to make working with geospatial
  raster data more productive.

Fiona
: [Fiona](https://github.com/Toblerity/Fiona) is
  [OGR](https://gdal.org/)'s neat, nimble, no-nonsense API for Python
  programmers. Fiona is designed to be simple and dependable. It
  focuses on reading and writing data in standard Python IO style and
  relies upon familiar Python types and protocols such as files,
  dictionaries, mappings, and iterators instead of classes specific to
  OGR.

Pyproj
: [Pyproj](https://github.com/jswhit/pyproj) allows for forward and
  inverse cartographic transformations and geodetic computations using
  the [Proj.4](https://github.com/OSGeo/proj.4) library, the current
  standard for such transformations and computations.
