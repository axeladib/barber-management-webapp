const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const authJwt = require("./authJwt");
const verifyToken = authJwt.verifyToken;

describe("verifyToken", () => {
  test("No token is provide", () => {
    //Create dummy data or parameter

    const req = { headers: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    
    //Test the output
    // console.log(res.status);
    // console.log(res.send)

    verifyToken(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith({ message: "No token provided" });
  });

  //Write for more use case
});
