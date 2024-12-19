import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import { TransformStream } from 'web-streams-polyfill/dist/ponyfill.js';

// Polyfill TextEncoder and TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

// Polyfill TransformStream
if (typeof global.TransformStream === 'undefined') {
  global.TransformStream = TransformStream;
}

// Polyfill BroadcastChannel
if (typeof global.BroadcastChannel === 'undefined') {
  global.BroadcastChannel = class {
    constructor() {
      this.onmessage = null;
    }
    postMessage() {}
    close() {}
  };
}
