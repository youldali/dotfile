---
id: dev-stack
title: Dev Stack
sidebar_position: 2
---

## Requirements

- [Docker](docker.md) `>=24.0.2` _or_ Rancher Desktop with the `dockerd` runtime selected
- [mkcert](https://github.com/FiloSottile/mkcert)

⚠️ Make sure you don't have a service already binded on ports 80 & 443, it would conflict with the Dev Stack Traefik.

## Quick Start

The folder `./dev-stack`.

In the terminal, launch the following :

`make start` or at root `make -C dev-stack start`

## 🌐 Web UI

|             | Default login | local url                                                                  | additional links                                                     |
| ----------- | ------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Traefik     | _NA_          | [https://traefik.dotfile-tms.local](https://traefik.dotfile-tms.local)     | [doc](https://doc.traefik.io/traefik/)                               |
| Portainer   | _NA_          | [https://portainer.dotfile-tms.local](https://portainer.dotfile-tms.local) | [doc](https://docs.portainer.io/v/ce-2.11/)                          |
| Maildev     | _NA_          | [https://mail.dotfile-tms.local](https://mail.dotfile-tms.local)           | [doc](https://github.com/maildev/maildev#maildev)                    |
| Redis Admin | _NA_          | [https://redis.dotfile-tms.local](https://redis.dotfile-tms.local)         | [doc](https://github.com/ErikDubbelboer/phpRedisAdmin#phpredisadmin) |

## Makefile command

- `make start`: start the stack
- `make stop`: stop the stack
- `make down`: clean and remove all containers on the stack
- `make certs-generate`: Generate & Add our local CA to your browsers
- `make add-hosts`: Add custom local hosts to your `/etc/hosts`
- `make remove-hosts`: Remove custom local hosts to your `/etc/hosts`

## Infrastructure

- Traefik
- Postgres
- Portainer
- Redis + Redis-admin

## Full HTTPS dev Environment

See [🔐 Full HTTPS development environment on dev.to](https://dev.to/nightbr/full-https-ssl-development-environment-4dam)
