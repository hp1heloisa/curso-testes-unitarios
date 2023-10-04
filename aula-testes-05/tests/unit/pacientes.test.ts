import { faker } from '@faker-js/faker';
import { generateProtocolForPacient } from 'protocols-generator';
import { PacientInput } from "../../src/validator";


jest.mock("uuid", () => {
  return{
    v4: () => {
      return "geracao de token"  //sempre a funcao v4 for chamada, retornará o essa string
    }
  }
})

describe("Protocol generation", () => {
  it("should create a protocol", async () => {
    const pacientData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      priority: faker.datatype.boolean()
    }

    const protocol = generateProtocolForPacient(pacientData.firstName, pacientData.lastName, pacientData.priority);
    expect(protocol).toEqual({
      priority: pacientData.priority,
      date: expect.any(Date),
      pacient: `${pacientData.firstName} ${pacientData.lastName}`,
      protocol: 'geracao de token' //queremos testar se a funcao retorna o formato esperado sem levar em conta a biblioteca externa
    });
  })
});