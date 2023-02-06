import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"


enum Environment {
  "OFFLINE" = "offline",
}

export function getDatabaseInstance()  {
  let config = {}
  if (process.env.ENVIRONMENT === Environment.OFFLINE) {
    config = {
      region: "offline",
      endpoint: "http://localhost:8000",
      credentials: {
        accessKeyId: "offline",
        secretAccessKey: "offline",
      },
    }
  }
  const dynamoClient = new DynamoDBClient(config)
  return DynamoDBDocumentClient.from(dynamoClient)
}





