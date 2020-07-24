debugger-is-attached
---

## What?

Lets you know if a debugger is _actually_ attached

## Why?

Sometimes I need to modify execution due to a debugger being attached. The
most obvious use-case is for setting a longer test timeout when debugging 
a test.

## There are other packages which do this!

Sort of. Some other attempts have been to observe the command-line
parameters of the current process, which doesn't work when, eg, debugging
a test in WebStorm. Also, debuggers _can detach_. 

This solution is based on a [GitHub comment](
https://github.com/nodejs/node/issues/9617#issuecomment-260729689)
so you know it's the real deal!

## Usage

```
describe(`some fixture`, () => {
  beforeEach(async () => {
      const
        debugging = await debuggerIsAttached(),
        timeout = debugging ? 300000 : 5000;
      jest.setTimeout(timeout);
  });
  it(`should do the things`, async () => {
    // Arrange
    // Act
    // Assert
  });
})
```

## Credits
- to the author of the original comment, [mscdex](https://github.com/mscdex)
- [newts](https://npmjs.com/package/newts) for bootstrapping this easily so I
  could just "get it out the door"
