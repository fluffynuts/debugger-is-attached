import "expect-even-more-jest";
import { debuggerIsAttached } from "../src";
describe(`debugger-is-attached`, () => {
    it(`should be a function`, async () => {
        // Arrange
        // Act
        expect(debuggerIsAttached)
            .toBeFunction();
        // Assert
    });

    it(`should return false when run normally`, async () => {
        // Arrange
        // Act
        const result = await debuggerIsAttached();
        // Assert
        expect(result)
            .toBeFalse();
    });
});
