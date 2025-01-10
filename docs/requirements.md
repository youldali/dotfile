---
id: requirements
title: Requirements
sidebar_position: 1
---

## Docker

- [Docker](https://docs.docker.com/install/) `>=18.09`
- [Docker Compose](https://docs.docker.com/compose/install/)

## NodeJS

- [NodeJS](https://nodejs.org/en/)

We recommend using [nvm](https://github.com/nvm-sh/nvm) and install the version from `.nvmrc`:

```bash
nvm install $(cat .nvmrc)
nvm use
```

You can configure a deeper shell integration to automatically detect `.nvmrc` and call `nvm use`.
See [zsh](https://github.com/nvm-sh/nvm#zsh) & [bash](https://github.com/nvm-sh/nvm#bash) examples.

You can also set your system default nvm version with the project version:

```bash
nvm alias default $(cat .nvmrc)
```

## Other tools

### Nx

- [Nx](tools/nx/index.md)

We recommend you install Nx globally: `npm install -g nx` or `yarn global add nx`.

### Mkcert

- [mkcert](https://github.com/FiloSottile/mkcert)

Use to manage local SSL certificates.
