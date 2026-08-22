// JavaScript Interview Questions - Part 2 (Questions 51-100)
export const javascriptInterviewPart2 = `### Advanced Questions

51. **What is the concept of dynamic typing in 2026?**
    - **Answer**: Types determined at runtime. Modern: TypeScript, JSDoc for type safety.
    - **Example**:
      \`\`\`javascript
      // Modern type validation
      const validate = (value) => {
        if (typeof value !== 'string') {
          throw new TypeError('Expected string');
        }
      };
      // JSDoc type annotations
      /**
       * @param {number} x
       * @param {number} y
       * @returns {number}
       */
      const add = (x, y) => x + y;
      // Runtime type checking
      const checkType = (value, schema) => {
        // Implementation with Zod or similar
      };
      \`\`\`
    - **Note**: JSDoc gives you TypeScript-grade checking in plain JS files via the tsc --checkJs flag.

52. **How does type coercion work in modern JavaScript?**
    - **Answer**: Automatic conversion between types. Modern: Avoid coercion, use explicit conversion.
    - **Example**:
      \`\`\`javascript
      // Modern coercion
      // Use explicit conversion
      const num = Number('42');
      const str = String(42);
      // Avoid implicit coercion
      const result = Number(a) + Number(b);
      // Nullish coalescing for safe defaults
      const value = input ?? 'default';
      // Optional chaining for safe access
      const name = user?.profile?.name;
      \`\`\`
    - **Note**: Implicit coercion causes subtle bugs ('1' + 1 = '11') — always convert explicitly.

53. **What are the new features in ES2026 (ECMAScript 2026)?**
    - **Answer**: Temporal API, Decorators, Pattern Matching. New Set methods: union(), intersection(). Array.fromAsync() for async iteration.
    - **Example**:
      \`\`\`javascript
      // ES2025 features
      // Temporal API
      const now = Temporal.Now.plainDateISO();
      const tomorrow = now.add({ days: 1 });
      // Decorators
      @log
      class Example {
        @deprecated
        oldMethod() {}
      }
      // Pattern matching
      const value = match(user) {
        when ({ type: 'admin' }) => 'Admin';
        when ({ type: 'user' }) => 'User';
        otherwise => 'Unknown';
      };
      \`\`\`
    - **Note**: Check browser support before using cutting-edge features — many are still proposal-stage.

54. **What are promises and how do they work (2026)?**
    - **Answer**: Objects representing async operations. Modern: Promise.withResolvers(), Promise.any().
    - **Example**:
      \`\`\`javascript
      // Modern promise patterns
      const { promise, resolve, reject } = Promise.withResolvers();
      // Promise combinators
      const results = await Promise.allSettled([
        fetch('/api/user'),
        fetch('/api/posts')
      ]);
      // Promise.any (ES2021) - first fulfilled
      const first = await Promise.any([
        fetch('/api/primary'),
        fetch('/api/backup')
      ]);
      \`\`\`
    - **Note**: Promise.any rejects only when ALL promises reject, collecting an AggregateError.

55. **How do you handle multiple promises in JavaScript?**
    - **Answer**: Promise.all, Promise.race, Promise.allSettled. Modern: Promise.any, Promise.withResolvers.
    - **Example**:
      \`\`\`javascript
      // Modern promise handling
      const fetchWithFallback = async (urls) => {
        const promises = urls.map(url => fetch(url));
        // Race with timeout
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 5000)
        );
        return Promise.race([Promise.any(promises), timeout]);
      };
      // Batch processing with concurrency
      const processBatch = async (items, concurrency = 5) => {
        const results = [];
        for (let i = 0; i < items.length; i += concurrency) {
          const batch = items.slice(i, i + concurrency);
          const batchResults = await Promise.all(
            batch.map(item => processItem(item))
          );
          results.push(...batchResults);
        }
        return results;
      };
      \`\`\`
    - **Note**: Batching with controlled concurrency prevents overwhelming APIs while staying fast.

56. **What is the Promise.all method?**
    - **Answer**: Waits for all promises to resolve. Modern: Promise.allSettled for error handling.
    - **Example**:
      \`\`\`javascript
      // Modern Promise.all
      const fetchAll = async () => {
        const [user, posts, comments] = await Promise.all([
          fetchUser(),
          fetchPosts(),
          fetchComments()
        ]);
        return { user, posts, comments };
      };
      // Promise.allSettled for partial results
      const results = await Promise.allSettled([
        fetch('/api/user'),
        fetch('/api/posts')
      ]);
      const successful = results
        .filter(r => r.status === 'fulfilled')
        .map(r => r.value);
      \`\`\`
    - **Note**: Promise.all fails fast — one rejection rejects everything; use allSettled when partial success is acceptable.

57. **What is the Promise.race method?**
    - **Answer**: Resolves/rejects with first settled promise. Modern: Timeout patterns, competition.
    - **Example**:
      \`\`\`javascript
      // Modern race patterns
      const withTimeout = (promise, ms) => {
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), ms)
        );
        return Promise.race([promise, timeout]);
      };
      // CDN fallback
      const loadResource = (primary, fallback) => {
        return Promise.race([
          loadFromCDN(primary),
          loadFromCDN(fallback)
        ]);
      };
      \`\`\`
    - **Note**: The losing promise still runs to completion — race doesn't cancel anything.

58. **How do you create a custom promise?**
    - **Answer**: New Promise constructor. Modern: Promise.withResolvers for better patterns.
    - **Example**:
      \`\`\`javascript
      // Modern custom promise
      class BetterPromise extends Promise {
        // Custom methods
        timeout(ms) {
          return withTimeout(this, ms);
        }
        retry(attempts) {
          return withRetry(this, attempts);
        }
      }
      // Promise.withResolvers
      const { promise, resolve, reject } = Promise.withResolvers();
      // Usage with external events
      const eventToPromise = (emitter, event) => {
        const { promise, resolve } = Promise.withResolvers();
        emitter.once(event, resolve);
        return promise;
      };
      \`\`\`
    - **Note**: Promise.withResolvers separates creation from resolution — cleaner than wrapping callbacks.

59. **What is the purpose of the Proxy object?**
    - **Answer**: Custom behavior for fundamental operations. Modern: Reactive programming, validation, logging.
    - **Example**:
      \`\`\`javascript
      // Modern proxy patterns
      const createReactiveState = (initial) => {
        const subscribers = new Set();
        return new Proxy(initial, {
          set(target, prop, value) {
            target[prop] = value;
            subscribers.forEach(cb => cb(target));
            return true;
          }
        });
      };
      // Validation proxy
      const validateObject = (schema) => ({
        set(target, prop, value) {
          const validator = schema[prop];
          if (validator && !validator(value)) {
            throw new Error(\\\`Invalid \${prop}\\\`);
          }
          target[prop] = value;
          return true;
        }
      });
      \`\`\`
    - **Note**: Vue's reactivity system is built on Proxies — intercepting get/set enables automatic dependency tracking.

60. **How do you create a proxy in JavaScript?**
    - **Answer**: new Proxy(target, handler). Modern: Revocable proxies, Reflect API.
    - **Example**:
      \`\`\`javascript
      // Modern proxy creation
      const { proxy, revoke } = Proxy.revocable(target, handler);
      // Revoke when done
      revoke();
      // Proxy with Reflect
      const loggingProxy = new Proxy(obj, {
        get(target, prop) {
          console.log(\\\`Getting \${String(prop)}\\\`);
          return Reflect.get(target, prop);
        },
        set(target, prop, value) {
          console.log(\\\`Setting \${String(prop)} to \${value}\\\`);
          return Reflect.set(target, prop, value);
        }
      });
      \`\`\`
    - **Note**: Always pair handler traps with Reflect calls to preserve default behavior and correct this binding.

61. **What is the Reflect API?**
    - **Answer**: Methods for interceptable JavaScript operations. Modern: Metaprogramming, proxy integration.
    - **Example**:
      \`\`\`javascript
      // Modern Reflect usage
      const obj = { a: 1 };
      // Reflection methods
      Reflect.set(obj, 'b', 2);
      Reflect.defineProperty(obj, 'c', { value: 3 });
      // Construct with new.target
      const instance = Reflect.construct(MyClass, [arg1, arg2]);
      // Apply function with context
      Reflect.apply(console.log, console, ['Hello']);
      \`\`\`
    - **Note**: Reflect mirrors every Proxy trap — together they form JavaScript's metaprogramming toolkit.

62. **How does the Reflect API differ from normal object operations?**
    - **Answer**: Better error handling (boolean returns). Modern: Consistent behavior, proxy compatibility.
    - **Example**:
      \`\`\`javascript
      // Modern comparison
      // Old way (throws on error)
      try {
        Object.defineProperty(obj, 'prop', {});
      } catch (e) {}
      // Reflect (returns boolean)
      if (!Reflect.defineProperty(obj, 'prop', {})) {
        // Handle failure gracefully
      }
      // Useful in proxies
      const handler = {
        get(target, prop) {
          return Reflect.get(target, prop);
        }
      };
      \`\`\`
    - **Note**: Reflect functions return false instead of throwing, making failure handling explicit.

63. **What is the difference between synchronous and asynchronous code?**
    - **Answer**: Synchronous: Blocks, sequential execution. Asynchronous: Non-blocking, parallel execution. Modern: Async/Await, workers, async iteration.
    - **Example**:
      \`\`\`javascript
      // Modern async patterns
      // Parallel async
      const [data1, data2] = await Promise.all([
        fetchData1(),
        fetchData2()
      ]);
      // Async iteration with backpressure
      const processStream = async (stream) => {
        for await (const chunk of stream) {
          await process(chunk);
        }
      };
      \`\`\`
    - **Note**: Sequential awaits are slower than parallel Promise.all when operations don't depend on each other.

64. **How do you debug JavaScript code (2026)?**
    - **Answer**: Chrome DevTools, VS Code debugger. Modern: Logging, breakpoints, performance tools.
    - **Example**:
      \`\`\`javascript
      // Modern debugging
      // Console
      console.trace('Stack trace');
      console.group('Request details');
      console.log('URL:', url);
      console.groupEnd();
      // Performance
      performance.mark('start');
      // ... code ...
      performance.mark('end');
      performance.measure('duration', 'start', 'end');
      // Memory
      console.memory;
      // Error tracking
      const error = new Error('Custom error');
      console.error(error);
      \`\`\`
    - **Note**: Use debugger; statements and conditional breakpoints instead of scattered console.logs.

65. **What are the different ways to handle asynchronous operations?**
    - **Answer**: Callbacks, Promises, Async/Await. Modern: Observables, event emitters.
    - **Example**:
      \`\`\`javascript
      // Modern async patterns
      // Event emitter pattern
      const events = new EventTarget();
      events.addEventListener('complete', (e) => {
        console.log(e.detail);
      });
      // Observable pattern
      const observable = new Observable(subscriber => {
        subscriber.next('Hello');
        subscriber.complete();
      });
      observable.subscribe({
        next: (value) => console.log(value),
        error: (err) => console.error(err),
        complete: () => console.log('Done')
      });
      \`\`\`
    - **Note**: Choose callbacks for events, promises for one-shot async, observables for streams of values over time.

66. **How do you prevent default behavior in an event?**
    - **Answer**: preventDefault() method. Modern: Passive events for performance.
    - **Example**:
      \`\`\`javascript
      // Modern event handling
      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Custom submission
      });
      // Passive scroll listeners
      document.addEventListener('scroll', handler, { passive: true });
      // Custom events
      const event = new CustomEvent('my-event', {
        detail: { data: 'value' },
        cancelable: true
      });
      \`\`\`
    - **Note**: Mark scroll/touch listeners as passive so the browser can optimize scrolling performance.

67. **What is event bubbling and event capturing?**
    - **Answer**: Bubbling: From target to root. Capturing: From root to target. Modern: Event delegation, useCapture.
    - **Example**:
      \`\`\`javascript
      // Modern event flow
      // Capture phase
      parent.addEventListener('click', handler, { capture: true });
      // Bubbling phase (default)
      child.addEventListener('click', handler);
      // Stop propagation
      element.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      \`\`\`
    - **Note**: Events flow capture → target → bubble; delegation relies on bubbling to catch child events at parents.

68. **How do you stop event propagation?**
    - **Answer**: stopPropagation() method. Modern: stopImmediatePropagation().
    - **Example**:
      \`\`\`javascript
      // Modern event control
      element.addEventListener('click', (e) => {
        // Prevents other handlers on same element
        e.stopImmediatePropagation();
        // Prevents bubbling
        e.stopPropagation();
        // Prevent default
        e.preventDefault();
        // Check if default prevented
        if (e.defaultPrevented) {
          // Handle prevented
        }
      });
      \`\`\`
    - **Note**: stopImmediatePropagation also blocks other listeners on the same element, not just ancestors.

69. **What are custom events in JavaScript?**
    - **Answer**: User-defined events. Modern: CustomEvent API, event targets.
    - **Example**:
      \`\`\`javascript
      // Modern custom events
      const myEvent = new CustomEvent('user-action', {
        detail: {
          userId: 123,
          action: 'login'
        },
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(myEvent);
      // Reactive state with custom events
      class Store extends EventTarget {
        constructor(initial) {
          super();
          this.state = initial;
        }
        setState(newState) {
          this.state = { ...this.state, ...newState };
          this.dispatchEvent(new Event('change'));
        }
      }
      \`\`\`
    - **Note**: CustomEvent.detail carries arbitrary data; extend EventTarget to build observable stores without libraries.

70. **What are WebSockets and how do you use them?**
    - **Answer**: Persistent real-time communication. Modern: WebSocket API, protocols, automatic reconnection.
    - **Example**:
      \`\`\`javascript
      // Modern WebSocket
      class WebSocketClient {
        constructor(url) {
          this.url = url;
          this.connect();
        }
        connect() {
          this.ws = new WebSocket(this.url);
          this.ws.onopen = () => this.handleOpen();
          this.ws.onmessage = (e) => this.handleMessage(e);
          this.ws.onclose = () => this.handleClose();
          this.ws.onerror = (e) => this.handleError(e);
        }
        handleClose() {
          // Reconnect with exponential backoff
          setTimeout(() => this.connect(), 1000);
        }
        send(data) {
          if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(data));
          }
        }
      }
      \`\`\`
    - **Note**: Implement reconnection with exponential backoff and heartbeat pings for production reliability.

### Expert Questions

71. **What are SharedArrayBuffer and Atomics?**
    - **Answer**: Shared memory between threads, atomic operations. Modern: Web Workers, high-performance computing.
    - **Example**:
      \`\`\`javascript
      // Modern SharedArrayBuffer
      const sab = new SharedArrayBuffer(1024);
      const int32 = new Int32Array(sab);
      // Worker 1
      Atomics.add(int32, 0, 1);
      // Worker 2
      const value = Atomics.load(int32, 0);
      // Wait/notify for synchronization
      Atomics.wait(int32, 0, 0);
      Atomics.notify(int32, 0, 1);
      \`\`\`
    - **Note**: Requires COOP/COEP headers for security; Atomics guarantee atomic read-modify-write across threads.

72. **What are Transferable Objects?**
    - **Answer**: Objects that can be transferred between contexts. Modern: Efficient data passing in workers.
    - **Example**:
      \`\`\`javascript
      // Modern transfer
      const buffer = new ArrayBuffer(1024);
      const view = new Uint8Array(buffer);
      // Transfer ownership
      worker.postMessage(view, [view.buffer]);
      // After transfer, original is unusable
      console.log(view.byteLength); // 0
      // Other transferable objects
      const canvas = new OffscreenCanvas(100, 100);
      const bitmap = canvas.transferToImageBitmap();
      worker.postMessage(bitmap, [bitmap]);
      \`\`\`
    - **Note**: Transfers move ownership with zero-copy — far faster than structured cloning large buffers.

73. **What are WebAssembly and JavaScript integration?**
    - **Answer**: Binary format for high-performance code. Modern: Wasm modules, shared memory.
    - **Example**:
      \`\`\`javascript
      // Modern WebAssembly
      const wasm = await WebAssembly.instantiateStreaming(
        fetch('module.wasm'),
        {
          env: {
            memory: new WebAssembly.Memory({ initial: 1 }),
            log: console.log
          }
        }
      );
      const result = wasm.instance.exports.calculate(1, 2);
      // Shared memory between Wasm and JS
      const memory = new WebAssembly.Memory({
        initial: 1,
        maximum: 2,
        shared: true
      });
      \`\`\`
    - **Note**: Use Wasm for CPU-intensive work (image processing, games); JS remains best for DOM and orchestration.

74. **What are the new features in ECMAScript 2026 (latest)?**
    - **Answer**: Pattern matching, decorators (finalized). Modern: Temporal API, JSON modules.
    - **Example**:
      \`\`\`javascript
      // ES2026 features
      // Import assertions
      import data from './data.json' assert { type: 'json' };
      // Source phase imports
      import source from './module.js' with { type: 'source' };
      // Async context
      const context = new AsyncContext();
      // Iterator helpers
      const result = [1, 2, 3].values()
        .filter(x => x > 1)
        .map(x => x * 2)
        .toArray();
      \`\`\`
    - **Note**: Import attributes replace assertions — use \`with { type: 'json' }\` syntax going forward.

75. **How do you implement real-time communication?**
    - **Answer**: WebSockets, SSE, WebRTC. Modern: Server-Sent Events for server push.
    - **Example**:
      \`\`\`javascript
      // Modern real-time patterns
      // SSE client
      const eventSource = new EventSource('/api/events');
      eventSource.addEventListener('message', ({ data }) => {
        const event = JSON.parse(data);
        handleEvent(event);
      });
      // WebRTC for peer-to-peer
      const pc = new RTCPeerConnection(config);
      pc.ontrack = ({ streams }) => {
        const video = document.getElementById('video');
        video.srcObject = streams[0];
      };
      \`\`\`
    - **Note**: SSE auto-reconnects and works over plain HTTP — simpler than WebSockets for one-way updates.

76. **What is the difference between local storage and session storage?**
    - **Answer**: Local: Persistent across sessions. Session: Per-tab, cleared on close. Modern: Storage events, quota limits.
    - **Example**:
      \`\`\`javascript
      // Modern storage
      // Storage events for sync
      window.addEventListener('storage', (e) => {
        console.log('Storage changed:', e.key, e.newValue);
      });
      // IndexedDB for large data
      const db = await idb.openDB('database', 1, {
        upgrade(db) {
          db.createObjectStore('store');
        }
      });
      \`\`\`
    - **Note**: Storage events fire in OTHER tabs, not the one that made the change — useful for cross-tab sync.

77. **How do you store data in the browser?**
    - **Answer**: Cookies, localStorage, sessionStorage, IndexedDB. Modern: Cache API, File API.
    - **Example**:
      \`\`\`javascript
      // Modern data storage
      // Cache API
      const cache = await caches.open('cache');
      await cache.put('/api/data', new Response(jsonData));
      // File API
      const fileHandle = await window.showSaveFilePicker();
      const writable = await fileHandle.createWritable();
      await writable.write(blob);
      await writable.close();
      \`\`\`
    - **Note**: localStorage is synchronous and ~5MB; IndexedDB is async and handles hundreds of MB.

78. **What are the security concerns with storing data in cookies?**
    - **Answer**: XSS, CSRF, hijacking. Modern: HttpOnly, SameSite, Secure flags.
    - **Example**:
      \`\`\`javascript
      // Modern cookie security
      document.cookie = 'token=value; SameSite=Strict; Secure; HttpOnly';
      // CSRF protection
      // Use CSRF tokens with SameSite cookies
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
      const response = await fetch('/api/action', {
        headers: { 'X-CSRF-Token': csrfToken }
      });
      \`\`\`
    - **Note**: HttpOnly cookies can't be read by JS (XSS-safe), but require CSRF tokens since they're sent automatically.

79. **How do you create and use regular expressions?**
    - **Answer**: Pattern matching with RegExp. Modern: Unicode properties, named groups.
    - **Example**:
      \`\`\`javascript
      // Modern regex
      const pattern = /(?<year>\\d{4})-(?<month>\\d{2})/u;
      const match = pattern.exec('2026-05');
      const { year, month } = match.groups;
      // Unicode property escapes
      const emoji = /\\p{Emoji}/u;
      // Lookbehind assertions
      const price = /(?<=\\$)\\d+/.exec('Price: $100');
      \`\`\`
    - **Note**: Named groups make regex readable — access matches via match.groups.year instead of array indices.

80. **What is the RegExp constructor with modern features?**
    - **Answer**: Creates regex with dynamic pattern. Modern: Unicode, sticky flags.
    - **Example**:
      \`\`\`javascript
      // Modern RegExp constructor
      const flags = 'gu';
      const pattern = '\\\\d+';
      const regex = new RegExp(pattern, flags);
      // With Unicode property escapes
      const unicodeRegex = new RegExp('\\\\p{Emoji}', 'u');
      // Sticky flag for matching at index
      const stickyRegex = new RegExp('abc', 'y');
      \`\`\`
    - **Note**: The sticky flag (y) anchors matching to lastIndex — great for tokenizers parsing character by character.

81. **What is the difference between let and var in terms of scope?**
    - **Answer**: let: Block-scoped, TDZ. var: Function-scoped, hoisted. Modern: Use let/const exclusively.
    - **Example**:
      \`\`\`javascript
      // Modern scoping
      // Block scope with let
      {
        let x = 1;
        var y = 2;
      }
      // x is not accessible, y is
      // Temporal dead zone
      {
        // TDZ starts
        let x = 3; // TDZ ends
      }
      \`\`\`
    - **Note**: var leaks out of blocks and loops causing classic closure bugs — let captures per-iteration correctly.

82. **How does the const keyword work?**
    - **Answer**: Block-scoped, cannot be reassigned. Modern: Immutable binding, mutable object.
    - **Example**:
      \`\`\`javascript
      // Modern const usage
      const PI = 3.14;
      // Object mutation is allowed
      const obj = { value: 1 };
      obj.value = 2; // OK
      // Cannot reassign
      // obj = {}; // Error
      // Object.freeze for immutability
      const immutable = Object.freeze({ value: 1 });
      // immutable.value = 2; // Error
      \`\`\`
    - **Note**: const locks the binding, not the value — freeze objects too if you need full immutability.

83. **What is destructuring assignment?**
    - **Answer**: Unpack values from arrays/objects. Modern: Nested, default, renaming.
    - **Example**:
      \`\`\`javascript
      // Modern destructuring
      // Array with rest
      const [first, second, ...rest] = [1, 2, 3, 4];
      // Object with defaults
      const { name = 'Guest', age } = user;
      // Nested
      const { address: { city, country } } = user;
      // Renaming
      const { name: userName } = user;
      // Function parameters
      const process = ({ id, data = {} }) => {
        // Implementation
      };
      \`\`\`
    - **Note**: Destructuring function parameters documents expected shape directly in the signature.

84. **What are template literals?**
    - **Answer**: String literals with interpolation. Modern: Tagged templates, raw strings.
    - **Example**:
      \`\`\`javascript
      // Modern template literals
      // Tagged template
      function html(strings, ...values) {
        return strings.reduce((acc, str, i) => {
          const value = values[i] || '';
          return acc + str + sanitize(value);
        }, '');
      }
      const safe = html\\\`<div>\${userInput}</div>\\\`;
      // Raw strings
      const path = String.raw\\\`C:\\Users\\John\\\`;
      // Expression interpolation
      const message = \\\`Hello \${user.name}!
      Today is \${new Date().toLocaleString()}\\\`;
      \`\`\`
    - **Note**: String.raw preserves backslashes literally — perfect for Windows paths and regex patterns.

85. **What is the rest operator, and how is it used?**
    - **Answer**: Collects remaining elements. Modern: Destructuring, spread alternatives.
    - **Example**:
      \`\`\`javascript
      // Modern rest patterns
      // Function rest parameters
      const sum = (...numbers) => numbers.reduce((a, b) => a + b);
      // Destructuring rest
      const [first, ...rest] = array;
      const { id, ...attributes } = user;
      // With typed arrays
      const [x, ...coordinates] = points;
      \`\`\`
    - **Note**: Rest creates a real array (unlike arguments object), so all array methods work on it.

86. **What is the spread operator, and how is it used?**
    - **Answer**: Expands iterable elements. Modern: Array/object cloning, merging.
    - **Example**:
      \`\`\`javascript
      // Modern spread usage
      // Array spread
      const merged = [...arr1, ...arr2];
      // Object spread
      const updated = { ...obj, newProp: 'value' };
      // Function arguments
      Math.max(...numbers);
      // With Set for dedup
      const unique = [...new Set(array)];
      // With Map
      const map = new Map([...entries]);
      \`\`\`
    - **Note**: Spread order matters — later properties overwrite earlier ones when merging objects.

87. **What is a class in JavaScript?**
    - **Answer**: Blueprint for objects. Modern: Private fields, static blocks.
    - **Example**:
      \`\`\`javascript
      // Modern class
      class User {
        #private = 'secret';
        static #staticPrivate = 'static secret';

        constructor(name) {
          this.name = name;
        }

        static { // Static init
          console.log('Class loaded');
        }

        get #privateValue() {
          return this.#private;
        }

        static create(name) {
          return new User(name);
        }
      }
      \`\`\`
    - **Note**: Classes are not hoisted like function declarations — define them before instantiation.

88. **How do you create and use classes in JavaScript?**
    - **Answer**: Class syntax with extends, super. Modern: Mixins, decorators.
    - **Example**:
      \`\`\`javascript
      // Modern class usage
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          console.log(\\\`\${this.name} speaks\\\`);
        }
      }
      class Dog extends Animal {
        #breed;
        constructor(name, breed) {
          super(name);
          this.#breed = breed;
        }
        speak() {
          super.speak();
          console.log('Woof!');
        }
        get breed() {
          return this.#breed;
        }
      }
      \`\`\`
    - **Note**: Call super() before using this in derived constructors — accessing this first throws a ReferenceError.

89. **What are class inheritance and the extends keyword?**
    - **Answer**: Inherits properties/methods from parent. Modern: Super calls, override methods.
    - **Example**:
      \`\`\`javascript
      // Modern inheritance
      class Base {
        constructor(value) {
          this.value = value;
        }
        method() {
          return this.value;
        }
      }
      class Derived extends Base {
        constructor(value, extra) {
          super(value);
          this.extra = extra;
        }
        method() {
          return super.method() + this.extra;
        }
      }
      \`\`\`
    - **Note**: extends works with any expression evaluating to a constructor or null — enabling mixin factories.

90. **What are getters and setters?**
    - **Answer**: Property accessors. Modern: Private fields with accessors.
    - **Example**:
      \`\`\`javascript
      // Modern accessors
      class User {
        #name;
        #age;
        constructor(name, age) {
          this.#name = name;
          this.#age = age;
        }
        get name() {
          return this.#name;
        }
        set name(value) {
          if (!value) throw new Error('Name required');
          this.#name = value;
        }
        get age() {
          return this.#age;
        }
        set age(value) {
          if (value < 0) throw new Error('Invalid age');
          this.#age = value;
        }
      }
      \`\`\`
    - **Note**: Accessors enable computed values and validation while keeping a clean property-based API.

91. **What are static methods?**
    - **Answer**: Class-level methods. Modern: Static blocks, private static.
    - **Example**:
      \`\`\`javascript
      // Modern static methods
      class MathUtils {
        static #PI = 3.14;
        static { // Init
          console.log('MathUtils loaded');
        }
        static get pi() {
          return this.#PI;
        }
        static add(a, b) {
          return a + b;
        }
        static async fetch() {
          const data = await api.fetch();
          return data;
        }
      }
      \`\`\`
    - **Note**: Static members belong to the class itself, not instances — call them via ClassName.method().

92. **How do you create a module in JavaScript?**
    - **Answer**: Module pattern, ES modules. Modern: Export maps, module federation.
    - **Example**:
      \`\`\`javascript
      // Modern module
      // math.js
      export const PI = 3.14;
      export default function add(a, b) {
        return a + b;
      }
      // main.js
      import add, { PI } from './math.js';
      // Dynamic import
      const module = await import('./module.js');
      // Import assertion
      import data from './data.json' assert { type: 'json' };
      \`\`\`
    - **Note**: ES modules have single evaluation — imported module code runs once regardless of import count.

93. **What is the purpose of export and import statements?**
    - **Answer**: Share code between modules. Modern: Export maps, conditional exports.
    - **Example**:
      \`\`\`javascript
      // Modern export/import
      // package.json
      {
        "exports": {
          ".": "./index.js",
          "./utils": "./utils.js",
          "./types": {
            "import": "./types.mjs",
            "require": "./types.cjs"
          }
        }
      }
      // Re-export
      export * from './core.js';
      export { default as App } from './App.js';
      // Dynamic exports
      export default await import('./feature.js');
      \`\`\`
    - **Note**: Export maps control what consumers can import — internal files stay private by omission.

94. **What is the default export, and how is it used?**
    - **Answer**: Single main export from module. Modern: Combined with named exports.
    - **Example**:
      \`\`\`javascript
      // Modern default exports
      // Default function
      export default function greet() {
        console.log('Hello');
      }
      // Default class
      export default class User {
        constructor(name) {
          this.name = name;
        }
      }
      // Default value
      export default 'Hello';
      // Import with any name
      import Greet from './greet.js';
      import UserClass from './user.js';
      \`\`\`
    - **Note**: Default exports allow arbitrary import names — some teams ban them to keep imports consistent.

95. **How do you handle exceptions in JavaScript?**
    - **Answer**: Try-catch-finally, throw. Modern: Custom error classes, error boundaries.
    - **Example**:
      \`\`\`javascript
      // Modern error handling
      class ValidationError extends Error {
        constructor(message, field) {
          super(message);
          this.field = field;
          this.name = 'ValidationError';
        }
      }
      try {
        const user = await fetchUser(id);
        if (!user) throw new ValidationError('User not found', 'id');
        return user;
      } catch (error) {
        if (error instanceof ValidationError) {
          // Handle validation
        }
        // Re-throw with context
        throw new Error(\\\`Failed to fetch user: \${error.message}\\\`, {
          cause: error
        });
      }
      \`\`\`
    - **Note**: The cause option chains errors preserving original stack traces for better debugging.

96. **What is the purpose of the finally block?**
    - **Answer**: Always executes, for cleanup. Modern: Resource cleanup, logging.
    - **Example**:
      \`\`\`javascript
      // Modern finally usage
      async function processFile(file) {
        const handle = await openFile(file);
        try {
          const data = await handle.read();
          return processData(data);
        } catch (error) {
          logError(error);
          throw error;
        } finally {
          await handle.close(); // Always cleanup
          cleanupResources();
        }
      }
      \`\`\`
    - **Note**: finally runs even when try contains return or throw — guaranteed cleanup execution.

97. **How do you throw custom errors?**
    - **Answer**: Extend Error class. Modern: Error cause, context.
    - **Example**:
      \`\`\`javascript
      // Modern custom errors
      class ApiError extends Error {
        constructor(message, status, code) {
          super(message);
          this.status = status;
          this.code = code;
          this.name = 'ApiError';
          this.timestamp = new Date();
        }
      }
      throw new ApiError('Not found', 404, 'NOT_FOUND');
      // Chained errors
      try {
        await apiCall();
      } catch (error) {
        throw new Error('API call failed', { cause: error });
      }
      \`\`\`
    - **Note**: Setting this.name ensures readable logs; instanceof checks enable precise error handling.

98. **What are async functions and how do they work?**
    - **Answer**: Functions returning promises. Modern: Top-level await, async iterators.
    - **Example**:
      \`\`\`javascript
      // Modern async functions
      // Top-level await
      const config = await fetchConfig();
      // Async method
      class Service {
        async fetchData() {
          const response = await fetch('/api/data');
          return response.json();
        }
        // Async generator
        async *streamData() {
          for await (const chunk of this.getChunks()) {
            yield processChunk(chunk);
          }
        }
      }
      \`\`\`
    - **Note**: An async function ALWAYS returns a promise — even returning a plain value wraps it automatically.

99. **How do you use the await keyword?**
    - **Answer**: Wait for promise resolution. Modern: For-await-of, multiple awaits.
    - **Example**:
      \`\`\`javascript
      // Modern await usage
      // Parallel awaits
      const [user, posts] = await Promise.all([
        fetchUser(),
        fetchPosts()
      ]);
      // For-await-of
      for await (const item of asyncIterable) {
        console.log(item);
      }
      // Await with timeout
      const withTimeout = (promise, ms) => {
        return Promise.race([
          promise,
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), ms)
          )
        ]);
      };
      const data = await withTimeout(fetchData(), 5000);
      \`\`\`
    - **Note**: await outside async functions requires top-level await support (ES modules in modern browsers).

100. **What are the differences between classical inheritance and prototypal inheritance in modern JS?**
     - **Answer**: Classical: Class-based, extends keyword. Prototypal: Object-based, prototype chain. Modern: Use classes for structure, composition for flexibility.
     - **Example**:
       \`\`\`javascript
       // Modern hybrid approach
       // Classical inheritance
       class Animal {
         constructor(name) { this.name = name; }
         speak() { console.log(\\\`\${this.name} speaks\\\`); }
       }
       class Dog extends Animal {}

       // Prototypal composition
       const canFly = {
         fly() { console.log('Flying'); }
       };
       const canSwim = {
         swim() { console.log('Swimming'); }
       };

       // Compose objects
       const duck = Object.assign({}, canFly, canSwim);

       // Class with mixins
       const WithFly = (Base) => class extends Base {
         fly() { console.log('Flying'); }
       };
       class Bird extends WithFly(Animal) {}
       \`\`\`
     - **Note**: Mixin factories compose behavior into classes — combining OOP structure with functional flexibility.
`;
