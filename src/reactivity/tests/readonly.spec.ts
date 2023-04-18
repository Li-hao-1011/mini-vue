import { readonly } from "../reactive";

describe("readonly", () => {
  it("happy path", () => {
    const original = { foo: 1, bar: { bar: 2 } };
    const wrapped = readonly(original);

    expect(wrapped).not.toBe(original);
    expect(wrapped.foo).toBe(1);
    expect(wrapped.bar.bar).toBe(2);
  });

  it("warn then call set", () => {
    // console.warn()
    console.warn = jest.fn();
    const wrapped = readonly({ name: "jay" });
    wrapped.name = "tom";
    expect(console.warn).toBeCalled();
  });
});
