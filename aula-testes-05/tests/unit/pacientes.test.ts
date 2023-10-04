import { faker } from '@faker-js/faker';
import { generateProtocolForPacient } from 'protocols-generator';
import { PacientInput } from "../../src/validator";


jest.mock("uuid", (() => {
  v4: () => 'geracao de token'
}))

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });
  it("should test the generateProtocol", async () => {
    const pacientData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      priority: faker.random.boolean(),
    }

    const body = generateProtocolForPacient(pacientData.firstName, pacientData.lastName, pacientData.priority);
    expect(body).toEqual({
      priority: false,
      date: expect.any(String),
      pacient: `${pacientData.firstName} ${pacientData.lastName}`,
      protocol: expect.any(String)
    });
  })
});