---
id: update-data-model
title: Update Data model
tags:
  - backend
sidebar_position: 2
---

# How to update the Data Model?

## Change Data Model

1. Update entities in `libs/backend/database/src/lib/entities`
2. Generate the migration: `yarn run db:migration:generate MyDataChanges`
3. Go check the migration file & edit it if necessary: `libs/backend/shared/migrations/src/lib/migrations/`
4. Import the migration file into `libs/backend/shared/migrations/src/lib/migrations.ts`
5. Restart the API to run the migration or `yarn run db:migration:run`

:::info
We recommend to have only one Migration per Merge Request. If you modify the DataModel multiple times during your Merge Request (Feature dev), please follow the steps below.
:::

## Add modification in the Data Model in during the same Merge Request

1. Add new modification to your entities
2. Go revert the previous generated migration: `yarn run db:migration:revert`
3. Generate the new updated migration: `yarn run db:migration:generate MyDataChanges`
4. Go check the migration file & edit it if necessary: `libs/backend/shared/migrations/src/lib/migrations/`
5. Update the import of the migration file into `libs/backend/shared/migrations/src/lib/migrations.ts`
