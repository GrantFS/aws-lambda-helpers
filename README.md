# AWS Lambda Helpers

## getDatabaseInstance

```ts

import { getDatabaseInstance } from "@grantpearceuk/aws-lambda"

constructor() {
    this.dynamodbDocumentClient = getDatabaseInstance()
  }

get() {
    const result = await this.dynamodbDocumentClient.send(queryCommand)
}

```

## createBatches

```ts

import { createBatches } from "@grantpearceuk/aws-lambda"

const batches = createBatches({ batch: events })

```

## Parameters

```ts

import { Parameters } from "@grantpearceuk/aws-lambda"

  constructor(event: APIGatewayEvent) {
    this.parameters = new Parameters(event)
  }
  get(): EventParser {
    const event = this.parameters.getPathParameter("event")
    const limit = this.parameters.getNumericParameter("limit")
  }


```
