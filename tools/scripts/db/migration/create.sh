#!/usr/bin/env sh

ts-node -P ./tools/tsconfig.tools.json -O '{"module": "commonjs", "experimentalDecorators": true, "esModuleInterop": true}' -r tsconfig-paths/register ./node_modules/typeorm/cli.js\
 migration:create "libs/backend/shared/migrations/src/lib/migrations/$1"
