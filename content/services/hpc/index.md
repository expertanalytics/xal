---
title: "High Performance Computing"
date: 2019-11-27
resources:
  - name: photo
    src: hpc.png
contact: ola@xal.no
---

Getting maximum compute power from limited hardware resources has always been a
main challenge in compute intensive applications, be it numerical solution of
partial differential equations or Monte Carlo integration to compute the  
multidimensional definite integral of some interesting function. 

Ever since the beggining of the computer era, technologist, programmers and
scientists have carefully written instructions to the CPU to solve ever more
challenging problems spending less time and energy. High Performance Computing
(HPC) is traditionally the craft of spreading compute load across several
kernels, cores, and computers, while ensuring the hardware is operating close
to peak capacity. 

In Expert Analytics we have both built distributed Beowulf-style clusters, and
written numerical software that can utilize the combined compute power of such
clusters for non-trivial parallell computing tasks, like solving large and
sparse linear systems of equations across machines.  Typically, MPI (Message
Passing Interface) can be used to divide computations across machines, and
OpenMP or multi-thredding are used to facilitate shared memory computations
across cores. 

Since the main objective of HPC programming is to speed up computations, low
level languages like C/C++ and Fortran are typically utilized. Our consultants
have years of hands on experience in using these languages both in industry and
during their previous occupations as researchers in academia. Over the years,
we have developed HPC software to study processes spanning from water discharge
in nature to how the universe has formed. 
