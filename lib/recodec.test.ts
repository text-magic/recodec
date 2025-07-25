import { describe, it, expect } from "bun:test";

import { toUTF8 } from "./recodec";

describe("toUTF8", () => {
  it("should convert a string to UTF-8", () => {
    const input = "Hello, world!";
    const output = toUTF8(new TextEncoder().encode(input).buffer);
    expect(output).toBe(input);
  });
});
