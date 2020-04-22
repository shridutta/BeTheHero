<p align="center">
  <img src="mobile/src/assets/logo@3x.png" />
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fariasmateuss/BeTheHero">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/fariasmateuss/BeTheHero">
  
  <a href="https://github.com/fariasmateuss/BeTheHero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fariasmateuss/BeTheHero">
  </a>

  <a href="https://github.com/fariasmateuss/BeTheHero/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/fariasmateuss/BeTheHero">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
 
<p align="center">
  App to help NGOs built with ReactJS, React Native, Node.js and more. 
</p>

<img src=".github/bethehero.png" />

<p align="center">
  BeTheHero is a project that aims to connect people who want to make monetary 
  contributions to NGOs (non-governmental organizations) that need help.
</p>

## Tech

- Node.js
- React
- React Native
- Expo
- SQLite3
- Jest

## Development setup

### Back-End
- Run `yarn` in the `backend` folder;
- Run `yarn start` to up the server;
- Open Insomnia or Postman and import the Insomnia.json workspace file at server folder.

### Front-End 
- Run `yarn` in the `frontend` folder;
- Run `yarn start` to up the project;

### Mobile 
- Run `yarn` in the `mobile` folder;
- Update the baseURL at src/services/api.js.
- Run `expo start` to up the project.

### Test
- Run `yarn test:backend` at the backend folder;
  
## How to contribute
- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My feature'`;
- Push to your branch: `git push origin my-feature`;

After the merge of your pull request is done, you can delete your branch.

# License
[MIT License](/LICENSE)
