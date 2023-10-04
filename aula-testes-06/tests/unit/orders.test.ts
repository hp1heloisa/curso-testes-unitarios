import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const orderInput: OrderInput = {
      client: faker.person.fullName(),
      description: faker.lorem.text()
    }
    jest.spyOn(orderRepository, "create").mockImplementationOnce((): any => {
      return{
        protocol: "fake-protocol",
        status: "IN_PREPARATION"
      }
    })
    const order = await createOrder(orderInput);
    expect(orderRepository.create).toBeCalledTimes(1);
    expect(order).toEqual({
        protocol: "fake-protocol",
        status: "IN_PREPARATION"
    })
  });

  it("should return an order based on the protocol", async () => {
    const protocol = "fake-protocol";
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((): any => {
      return{
        protocol,
        status: "IN_PREPARATION"
      }
    })
    const order = await getOrderByProtocol(protocol);
    expect(orderRepository.getByProtocol).toBeCalledTimes(1);
    expect(order).toEqual({
      protocol,
      status: "IN_PREPARATION"
    })
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((): any => {
      return undefined
    })
    const protocol = "wrong-protocol";
    const order = await getOrderByProtocol(protocol);
    expect(orderRepository.getByProtocol).toBeCalledTimes(1);
    expect(order).toEqual({
      protocol,
      status: "INVALID"
    })
  });
});