import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventPathParameters,
  APIGatewayProxyEventQueryStringParameters,
} from "aws-lambda"
import { ParameterInterface } from "./interface"

interface QueryStringParameters {
  [name: string]: string
}

export class Parameters implements ParameterInterface {
  public event: APIGatewayProxyEvent

  constructor(event: APIGatewayProxyEvent) {
    this.event = event
  }

  private hasParametersSet(): boolean {
    return this.event.queryStringParameters !== null && this.event.queryStringParameters !== undefined
  }

  private hasParameter(parameterKey: string): boolean {
    const parameters = this.event.queryStringParameters as APIGatewayProxyEventQueryStringParameters
    return this.isEmpty(parameters[parameterKey])
  }

  private isEmpty(currentParameterKey: string | undefined): boolean {
    return currentParameterKey !== null && currentParameterKey !== undefined && currentParameterKey !== ""
  }

  private isNumeric(value: any): boolean {
    return !isNaN(value) && !isNaN(parseFloat(value))
  }

  private hasPathParametersSet(): boolean {
    return this.event.pathParameters !== null && this.event.pathParameters !== undefined
  }

  private hasPathParameter(parameterKey: string): boolean {
    const parameters = this.event.pathParameters as APIGatewayProxyEventPathParameters
    return this.isEmpty(parameters[parameterKey])
  }

  public getParameter(parameterKey: string): string {
    if (this.hasParametersSet() && this.hasParameter(parameterKey)) {
      return (this.event.queryStringParameters as QueryStringParameters)[parameterKey]
    }
    return ""
  }

  public getNumericParameter(parameter: string): number {
    const limitParam = this.getParameter(parameter)

    if (!this.isNumeric(limitParam)) {
      return 0
    }
    return parseInt(limitParam)
  }

  public getPathParameter(parameterKey: string): string {
    if (this.hasPathParametersSet() && this.hasPathParameter(parameterKey)) {
      return (this.event.pathParameters as QueryStringParameters)[parameterKey]
    }
    return ""
  }
}



