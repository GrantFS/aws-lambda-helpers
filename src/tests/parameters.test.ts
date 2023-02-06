import { APIGatewayProxyEvent } from "aws-lambda"
import { Parameters } from "../parameters"

describe("When using the parameters", () => {
  const exampleEvent = {
    queryStringParameters: {
      limit: 1,
      source: "The Source",
    },
  } as unknown as APIGatewayProxyEvent

  describe("When getting non numeric parameters", () => {
    it("Should return the correct parameter", async () => {
      const parameters = new Parameters(exampleEvent)
      expect(parameters.getParameter("source")).toBe("The Source")
    })

    describe("When the parameter does not exist", () => {
      it("Should return an empty string", async () => {
        const parameters = new Parameters(exampleEvent)
        expect(parameters.getParameter("category")).toBe("")
      })
    })
  })

  describe("When getting numeric parameters", () => {
    it("Should return the parameter as a number", async () => {
      const parameters = new Parameters(exampleEvent)
      expect(parameters.getNumericParameter("limit")).toBe(1)
    })

    describe("When the parameter does not exist", () => {
      it("Should return 0", async () => {
        const parameters = new Parameters(exampleEvent)
        expect(parameters.getNumericParameter("category")).toBe(0)
      })
    })
  })
})
