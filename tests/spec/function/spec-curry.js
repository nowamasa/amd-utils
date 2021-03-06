define(['src/function/curry'], function(curry){

    var add = function(a, b){
        return a + b;
    };


    describe('function/curry', function(){

        it('should curry arguments', function(){
            var addTen = curry(add, 10);
            expect( addTen(2) ).toBe( 12 );
            expect( addTen(5) ).toBe( 15 );
        });

        it('should curry multiple arguments', function(){
            expect( curry(add, 10, 5)() ).toBe( 15 );
        });

    });

});
