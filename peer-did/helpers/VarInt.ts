/** putUVarInt encodes a UInt64 into a buffer and returns it.
 */
export function putUVarInt(value: number, buffer: number[]): number[] {
  let val: number = value;
  const tmpBuffer: number[] = [];

  do {
    let b = val & 0x7f;
    val >>>= 7;
    if (val > 0) {
      b |= 0x80;
    }
    tmpBuffer.push(b);
  } while (val > 0);

  for (let i = tmpBuffer.length - 1; i >= 0; i--) {
    const value = tmpBuffer.at(i);

    if (typeof value === "number") {
      buffer.unshift(value);
    }
  }

  return buffer;
}

/** uVarInt decodes an UInt64 from a byte buffer and returns the value and the
    number of bytes greater than 0 that were read.
    If an error occurs the value will be 0 and the number of bytes n is <= 0
    with the following meaning:
        n == 0: buf too small
        n  < 0: value larger than 64 bits (overflow)
        and -n is the number of bytes read
*/
export function uVarInt(buffer: number[]): [number, number] {
  let output = 0;
  let counter = 0;
  let shifter = 0;

  for (const byte of buffer) {
    if (byte < 0x80) {
      if (counter > 9 || (counter === 9 && byte > 1)) {
        return [0, -(counter + 1)];
      }
      return [output | (byte << shifter), counter + 1];
    }

    output |= (byte & 0x7f) << shifter;
    shifter += 7;
    counter += 1;
  }

  return [0, 0];
}

/** putVarInt encodes an Int64 into a buffer and returns it.
 */
export function putVarInt(value: number, buffer: number[] = []): number[] {
  const unsignedValue = BigInt(value) << BigInt(1);
  return putUVarInt(Number(unsignedValue), buffer);
}

/** varInt decodes an Int64 from a byte buffer and returns the value and the
      number of bytes greater than 0 that were read.
      If an error occurs the value will be 0 and the number of bytes n is <= 0
      with the following meaning:
           n == 0: buf too small
           n  < 0: value larger than 64 bits (overflow)
                   and -n is the number of bytes read
  */
export function varInt(buffer: number[]): [number, number] {
  let unsignedValue = BigInt(0);
  let shifter = BigInt(0);
  let counter = 0;

  for (const byte of buffer) {
    if (byte < 0x80) {
      if (counter > 9 || (counter === 9 && byte > 1)) {
        throw new Error("Value larger than 64 bits (overflow)");
      }
      return [Number(unsignedValue | (BigInt(byte) << shifter)), counter + 1];
    }

    unsignedValue |= BigInt(byte & 0x7f) << shifter;
    shifter += BigInt(7);
    counter += 1;
  }

  throw new Error("Input buffer too small");
}

export function readUVarInt(buffer: Uint8Array): bigint {
  let value = BigInt(0);
  let shifter = BigInt(0);
  let index = 0;

  for (const byte of buffer) {
    const byteValue = BigInt(byte);
    value |= (byteValue & 0x7fn) << shifter;

    if (byteValue < 0x80n) {
      return value;
    }

    shifter += BigInt(7);
    index += 1;

    if (index > 9) {
      throw new Error("Value larger than 64 bits (overflow)");
    }
  }

  throw new Error("Input buffer too small");
}

export function readVarInt(buffer: Uint8Array): bigint {
  const unsignedValue = readUVarInt(buffer);
  let value = unsignedValue >> 1n;

  if (unsignedValue & 1n) {
    value = ~value;
  }

  return value;
}

export function uVarIntBigInt(buffer: number[]): [number, number[]] {
  const [size, bytesRead] = uVarInt(buffer);
  if (bytesRead === 0) {
    throw new Error("Input buffer too small");
  }
  if (bytesRead < 0) {
    throw new Error("Value larger than 64 bits (overflow)");
  }

  // Return the size as read from the uvarint and the buffer without the uvarint
  return [size, buffer.slice(bytesRead)];
}
