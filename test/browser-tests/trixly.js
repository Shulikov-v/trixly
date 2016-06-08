var Trixly = require('../../src/index').default;
describe('Trixly', function () {
    it('should run a simple TypeScript test #1', function () {
        expect(true).to.be.true;
    });
    it('should run a simple TypeScript test #2', function () {
        // Example that TypeScript can be used in the UT files as well
        var greeter = new Trixly('Hello, world!');
        expect(greeter.greeting).to.eql('Hello, world!');
    });
    it('should be an object', function () {
        expect(Trixly).to.be.a.object;
    });
});
//# sourceMappingURL=trixly.js.map