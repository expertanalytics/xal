---
title: "What we have done"
date: 2019-01-04T20:27:58+01:00
menu:
  main:
    name: "Projects"
draft: true
weight: 70
---

- Statkraft needed help to operationalize a prototype for distributed
  hydrological forecasting, and hired one of our consultants to
  help. We ended up reimplementing the whole system, using modern
  templated C++, and equipping it with a Python interface. The new
  system, called Shyft, runs several hundred times faster than the old
  prototype, and is currently used both operationally at Statkraft and
  as a research tool by hydrologists in academia.  Shyft is open
  source, and can be found at https://github.com/statkraft/shyft and
  http://shyft.readthedocs.io/en/latest/.

- Long term power production planning involves resolving a
  comprehensive market model with power consumers, producers, and
  transmission lines, down to the individual reservoirs and hydro
  power stations in coupled water courses. This is done by running
  simulation software that outputs a fairly large amount of data in
  the range of 15 - 20 GB each time a simulation is run. We have
  helped building an analysis platform for this problem that contains
  a domain model in which simulation results are inserted after they
  are computed. Furthermore, we have developed advanced techniques for
  retrieving and visualizing the results in terms of time series data
  and statistics, along with advanced aggregation of results to allow
  forecasts to be viewed in ways earlier not feasible.

- A customer wanted to optimise their allocation of manpower relative
  to demand. We have developed and implemented a full system from
  demand forecasting based on historical data, to optimised work
  schedules (based on Google optimization tools), and implementation
  in their time-management system.

- A small bioinformatics software company is trying to disrupt in
  precision cancer immunotherapy. They marked themselves using machine
  learning to predict the effect of a therapy. One of our consultant
  went in and took the role developing the backbone of the scientific
  platform implementing state-of-the-art machine learning applied on
  observational protein data scaling on the range of 10-20 GB. The
  algorithms include support vector machine, random forest, artificial
  neural network, and topic modeling. Some of these machine learning
  implementations are currently (as of May 2018) marked leading within
  their applications.

- Mobile payments---Since 2013, we have been involved in projects with
  Norwegian companies building mobile payment systems; mCash, Auka,
  and Vipps. Our involvement have mostly been on the backend, working
  on core transaction and settlement logic as well as internal and
  external APIs. When working on payment systems, the concepts of data
  consistency, idempotent operations, and fault-tolerant operations
  need to be well understood. In order for the system to perform well
  under load, it is required to understand the relevant performance
  characteristics of the system including e.g. modern cloud
  infrastructures. Through the years, we have built domain knowledge
  within the field of mobile payments that we now can apply with
  existing and new customers working on problems in the financial
  sector. The technologies we have applied in this field are mainly
  Python and Go, deployed on the Google App Engine and Azure
  stacks. Both relational and document database models have been used.
