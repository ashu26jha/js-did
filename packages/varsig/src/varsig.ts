export enum SIGNING {
  RSA = 0x1205,
}

export enum HASHING {
  SHA2_256 = 0x12,
  SHA2_512 = 0x13,
}

export enum ENCODING {
  IDENTITY = 0x00,
}

// export function verify(signingInput: Uint8Array, bytes: Uint8Array, offset = 0) {
//   const input = bytes.subarray(offset)
//   const varsig = fromBytes(input)
// }
