import { helloworld } from "../index";

describe("hellowrold", () => {

  test("message is hoge.", () => {
      expect(helloworld("hoge")).toEqual("hello world! hoge");
  });

  test("message is fuga.", () => {
    expect(helloworld("fuga")).toEqual("hello world! fuga");
  });

});
