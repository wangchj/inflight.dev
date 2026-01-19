# Getting Started

Welcome to Inflight! Inflight is a REST API client desktop application that is designed to simplify the process of designing and testing APIs that run on the web. This document describe how to install Inflight and get started with using the application.

## Installation

It is very simple to install Inflight. The following shows the steps:

1. Download the package from [Inflight website](https://inflight.dev)
2. Unzip the application to any directory
3. Inflight is ready to use by double clicking on the unzipped program. Optionally, drag the unzip program to the Applications folder on your Mac

## Creating a project

A project contains related requests and configurations. A typical API consists of CRUD operations on resources. In this use case, it is common to create a project for an API and a request for each operation within the project.

It's simple to create a project. After opening Inflight, click on "New Project". Inflight opens a dialogue to allow you to choose where to save the project. Select any location on your system and select "Open".

## Sending a request

After creating a project, you are ready to send requests. The follow demonstrates the steps to send a simple request (to GitHub REST API):

1. Click on the "New Request" button
2. In the URL, enter `https://api.github.com/users/octocat/repos`
3. Click on "Headers" and add a new header with the key `user-agent`, and value `inflight`
4. Click on the "Send" button. The response shows a list GitHub repositories for the user `octocat`.

Congratulations! You've created a new Inflight project and send a request. Use the rest of docs to learn more about request configurations!