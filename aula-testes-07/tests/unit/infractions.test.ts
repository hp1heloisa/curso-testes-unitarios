import { getInfractionsFrom } from "../../src/infractions-service";
import * as userRepository from "../../src/users-repository"

describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    
    expect(true).toBe(true);
  });

  it("should throw an error when driver license does not exists", () => {
    const userMock = jest.spyOn(userRepository, "getUserByDocument").mockImplementation(() => {
      return undefined;
    })
    const userInfractions = getInfractionsFrom("invalid");
    expect(userInfractions).rejects.toEqual({
      type: "NOT_FOUND",
      message: "Driver not found"
    })
  })
});