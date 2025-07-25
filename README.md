# recodec

## Features

- Auto detect encoding
- Recode to UTF-8

## Install

```bash
npm install @text-magic/recodec
pnpm add @text-magic/recodec
yarn add @text-magic/recodec
bun add @text-magic/recodec
```

## Usage

```ts
import { toUTF8 } from "@text-magic/recodec";

const input = await Bun.file("./test.txt").arrayBuffer();
const output = toUTF8(input);
console.log(output);
```

