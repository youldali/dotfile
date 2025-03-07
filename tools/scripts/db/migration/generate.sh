#!/usr/bin/env sh

ts-node -P ./tools/tsconfig.tools.json -O '{"module": "commonjs", "experimentalDecorators": true, "esModuleInterop": true}' -r tsconfig-paths/register ./node_modules/typeorm/cli.js\
 --dataSource ./tools/scripts/db/dataSource.cli.js\
   migration:generate --pretty "libs/backend/shared/migrations/src/lib/migrations/$1"
