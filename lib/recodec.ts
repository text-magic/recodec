import createDebug from "debug";
import chardet from "chardet";
import iconv from "iconv-lite";

const errorlog = createDebug("toUTF8:error");
const infolog = createDebug("toUTF8:info");
const verbose = createDebug("toUTF8:verbose");

export function toUTF8(input: ArrayBufferLike): string {
  const buffer = Buffer.from(input);

  const detectedEncoding = chardet.detect(buffer);

  if (!detectedEncoding) {
    errorlog("Failed to detect encoding", buffer);
    throw new Error("Failed to detect encoding");
  }

  infolog(`Detected encoding: ${detectedEncoding}`);

  if (!iconv.encodingExists(detectedEncoding)) {
    errorlog(`Encoding ${detectedEncoding} is not supported`);
    throw new Error(`Encoding ${detectedEncoding} is not supported`);
  }

  try {
    const decodedString = iconv.decode(buffer, detectedEncoding);
    verbose(`Decoded string: ${decodedString}`);
    return decodedString;
  } catch (error) {
    errorlog(`Failed to decode string: ${error}`, buffer);
    throw error;
  }
}
