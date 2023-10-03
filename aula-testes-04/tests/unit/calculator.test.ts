import { MathBody } from "validator";
import calculator from "../../src/calculator";

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });
  
  it("should sum two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sum",
      n1: 2,
      n2: 2
    };

    const value = calculator.sum(mathBody.n1,mathBody.n2);
    expect(value).toBe(4);
  });

  it("should subtract two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sub",
      n1: 2,
      n2: 2
    };

    const value = calculator.sub(mathBody.n1,mathBody.n2);
    expect(value).toBe(0);
  });
  it("should multiply two numbers", async () => {
    const mathBody: MathBody = {
      operation: "mul",
      n1: 3,
      n2: 3
    };

    const value = calculator.mul(mathBody.n1,mathBody.n2)
    expect(value).toBe(9);
  });

  it("should divide two numbers", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 2
    };

    const value = calculator.div(mathBody.n1,mathBody.n2)
    expect(value).toBe(1);
  });

  it("should return 0 when diving by zero", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 0
    };

    const value = calculator.div(mathBody.n1,mathBody.n2)
    expect(value).toBe(0);
  });
})