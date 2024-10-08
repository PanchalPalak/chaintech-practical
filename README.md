# Angular List User Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Pre-requisites:

- Install [npm v10.7.0](https://docs.npmjs.com/getting-started) and [nodeJS v20.15.0](https://nodejs.org/en/docs/)

## Getting Started:

### Repository Setup:

- Clone the repository:

  ```bash
  $ git clone <Repository Path>

  $ cd <Repository Path>
  ```

- Installation:

  ```bash
  $ npm install
  ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Practical Task

### Overview

This Angular application displays a list of users fetched from a public API. Users can be sorted and filtered based on name and username.

### Features

- **Display User List:** Fetch and display a list of users.
- **Filter Users:** Filter users based on name or username.
- **Sort Users:** Sort users by various properties (e.g., name, username).

### User List Component

#### Description

The user list component is the core feature of this application. It retrieves user data from a public API, displays it in a list format, and provides options to filter and sort the data.

#### Key Functionalities

- **Data Fetching:** The component fetches user data from a public API using Angular’s HttpClient. The API endpoint used is: `https://jsonplaceholder.typicode.com/users`

- **Filtering:** Users can filter the list based on their name or username. The filter functionality is implemented to dynamically update the displayed list as the user types in the search input.

- **Sorting:** The component allows sorting of the user list based on various properties, such as name or username. The sorting is performed in ascending order and can be applied after filtering the list.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
