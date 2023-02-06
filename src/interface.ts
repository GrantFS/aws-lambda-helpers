
import { APIGatewayProxyEvent } from "aws-lambda"



export interface ParameterInterface {
  event: APIGatewayProxyEvent
  getParameter(parameterKey: string): string
  getNumericParameter(parameter: string): number
  getPathParameter(parameterKey: string): string
}





