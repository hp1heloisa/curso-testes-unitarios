import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const OrderInput: OrderInput = {
      client: faker.person.fullName(),
      description: faker.lorem.text()
    }
    jest.spyOn(orderRepository, "create").mockImplementationOnce((): any => {
      return{
        protocol: "oioi",
        status: "oioi"
      }
    })
    const order = await createOrder(OrderInput);
    console.log(order);
    expect(order).toEqual({
      protocol: "oioi",
      description: "oioi"
    })
  });

  it("should return an order based on the protocol", async () => {
    // TODO
    expect(true).toBe(true);
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    // TODO
    expect(true).toBe(true);
  });
});