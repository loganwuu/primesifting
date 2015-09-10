describe('primeSift', function() {
    it("returns 'no prime number' if the number is less than 2", function() {
        expect(primeSift(1)).to.eql('No prime numbers!');
    });

    it("returns 2 as first prime number", function() {
        expect(primeSift(2)).to.eql([2]);
    });

    it("returns prime numbers", function() {
        expect(primeSift(10)).to.eql([2,3,5,7]);
    });
});
