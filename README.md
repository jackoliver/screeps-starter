# screeps-starter

Starter kit for Gulp Screeps on private servers

## Getting started

### Requirements

This repo requires you to have [ScreepsMod Auth](https://github.com/ScreepsMods/screepsmod-auth) installed on your private server and to set a user specific password.

### Repo location

You should clone this repo into your normal repositories folder, not inside the Application Support folder that Steam normally uses. This gets overwritten often and is server specific. This project aims to be server-agnostic and allow you to deploy to any private server, or even multiple private servers.

### Credentials

Server credentials are stored inside `env.private.js` by default. You can clone this as many times as you like for as many servers as you need. This file is in the `.gitignore`, and be sure to add any others there too.

The basic credential shape is like so:

```js
module.exports = {
  email: "EMAIL_ADDRESS",
  password: "PASSWORD",
  branch: "default",
  ptr: false,
  host: "IP_ADDRESS",
  port: 21025,
  secure: false
};
```

Just replace the `EMAIL_ADDRESS`, `PASSWORD` and `IP_ADDRESS` strings with your own and you're good to go.

## Uploading to the server

Just run `gulp watch` in your terminal and it will upload any changes on save to the Screeps server.

## Feedback

If you notice something missing or wrong with this repo, please make a pull request and I'll take a look! I hope this helps!
