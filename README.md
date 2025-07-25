# recodec

## Features

- Auto detect encoding
- Recode to UTF-8

## Usage

```ts
import { toUTF8 } from "@text-magic/recodec";

const input = await Bun.file("./test.txt").arrayBuffer();
const output = toUTF8(input);
console.log(output);
```

