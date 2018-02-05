describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - including", function () {
    testedInterval = new Interval(10, 20);

    [
        
        new Interval(15, 18),
        new Interval(13, 18)
     
    ].forEach(function (interval) {
        it("should includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
});

[
		new Interval(7, 11),
		new Interval(19, 21),
        new Interval(8, 9)
	
    ].forEach(function (interval) {
        it("should not includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});

describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    [
		{
			interval : new Interval(6, 13),
			result : new Interval(6,20)
		},
		
		{
			interval : new Interval(8, 9),
			result : [new Interval(8,9), testedInterval]
		},
		{
			interval : new Interval(6, 23),
			result : new Interval(6,23)
		},
		{
			interval : new Interval(21, 22),
			result : [testedInterval, new Interval(21,22)]
		}
		
		
    ].forEach(function (interval) {
		var msg = "";
		if (typeof interval.result.start !== 'undefined')
			msg = "should returns Interval[" + interval.result.start + ", " + interval.result.end + "] when doing union of " + testedInterval.toString() + " and " + interval.interval.toString();
		else
			msg = "should returns Interval(" + interval.result + ") when doing union of " + testedInterval.toString() + " and " + interval.interval.toString();
        it(msg, function () {
            var result = testedInterval.union(interval.interval);
			if (typeof interval.result.start !== 'undefined') {
				expect(result.start).toEqual(interval.result.start);
				expect(result.end).toEqual(interval.result.end);
			} else
				expect(result).toEqual(interval.result);
			
        });
    });
});
