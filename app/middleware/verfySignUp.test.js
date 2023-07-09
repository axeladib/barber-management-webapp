const { verify } = require("jsonwebtoken");
const verifySignUp = require("./verifySignUp");

describe("verifySignUp", () => {
  describe("checkDuplicateUsernameOrEmail", () => {
    //TODO: Testing for check username exist or not in database
    it("should return an error if username is already in use", () => {
      const req = {
        body: {
          username: "existingUsername",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      verifySignUp.checkDuplicateUsernameOrEmail(req, res, () => {});

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Failed !!! Message already in use",
      });
    });

    //TODO: Testing for check email exist or not in database

    it("should return an error if email is already in use", () => {
      const req = {
        body: {
          email: "existing@gmail.com",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      verify.checkDuplicateUsernameOrEmail(req, res, () => {});

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Failed!!! Email is already been used",
      });
    });

    //TODO: If the username and email not use then called the next function
    it("should called next if the username and email are not in use", () => {
      const req = {
        body: {
          username: "newUser",
          email: "newUser@gmail.com",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const next = jest.fn();

      verifySignUp.checkDuplicateUsernameOrEmail(req, res, next);
      //Return the falsy statement of req and res to compensate the username and email is not in use
      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
      //Invoke the next function to called if the uername an demail are not in use
      expect(next).toHaveBeenCalled();
    });
  });

  //TODO: Tested the checkRolesExisted

  //FIXME: First : Return error if the role is not exist
  //FIXME: Second : Called next if the role is exist

  describe("checkRolesExisted", () => {
    //FIXME: Check if there is
    it("should return an error if role is a roles is not exist", () => {
      const req = {
        body: {
          roles: ["admin", "moderator", "invalidRole"],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      verifySignUp.checkRolesExisted(req, res, () => {});
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: "Failed! Role is not existed = invalidRole",
      });
    });

    it("should go to next if all role existed", () => {
      const req = {
        body: ["admin", "moderator"],
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const next = jest.fn();

      verifySignUp.checkRolesExisted(req, res, next);
      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
});
