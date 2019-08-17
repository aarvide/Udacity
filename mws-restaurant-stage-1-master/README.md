# Alfredo Arvide 
## Udacity Front End Web Developer
## Final Project - Responsive Website

## Table of Contents

- [Introduction](#introduction)
- [File Structure](#file structure)
- [Credits](#credits)

## Introduction 

My Last Project for my Udacity Front End Developer nanodegree consisted of editing a website that was currently designed to only work on dektops and we are supposed to make it a fully responsive website.  This was a tough project, but I was able to get through it.  There was a lot of trial and error and I learned a lot.

The purpose of this website is to show the info of a few new york restaurants by showing the address, operating hours, food reviews and more. One feature of this website is that it caches the info on your computer so you can access it offline.

To view the website, simply run Index.HTML.

#### File Structure

The following files are the ones that I personally worked on. The rest were provided by the project materials.

* Index.html - This file runs the main page of the reviews website
* Restaurant.html - This file runs each individual's restaurants information
* Styles.css - This is the file that contains all the stylings and responsiveness
* sw.js - This is the file that was created to run the service worker that cached the pages for offline use.

#### Credits

Below is the Project Description, all credit goes to the staff at Udacity for helping me get through this nanodegree and for helping me learn a lot.

## Mobile Web Specialist Certification Course
---

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
