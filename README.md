debugger-is-attached
---
![Test](https://github.com/fluffynuts/debugger-is-attached/workflows/Tests/badge.svg)

![npm](https://img.shields.io/npm/v/debugger-is-attached)

## What?

Lets you know if the node inspector is attached (which it will be if someone
is intending to debug). Version 2 changes how this is done and can no longer
tell the difference between just having the inspector attached, and actually
having an active debugger. But for the case of extending test timeouts when
a dev is debugging, this method is still valid.

## Why?

Sometimes I need to modify execution due to a debugger being attached. The
most obvious use-case is for setting a longer test timeout when debugging 
a test.

## There are other packages which do this!

Sort of. Some other attempts have been to observe the command-line
parameters of the current process, which doesn't work when, eg, debugging
a test in WebStorm.

## Usage

```
describe(`some fixture`, () => {
  beforeEach(async () => {
      const
        debugging = debuggerIsAttached(),
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
