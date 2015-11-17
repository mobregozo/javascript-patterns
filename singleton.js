var mySingleton = (function() {
    var singletonInstance;

    function init() {
        function privateMethod(){
            console.log( "private method" );
        }
        //private property
        var stringValue = 'Singleton';

        return {
            publicMethod: function () {
                console.log( "public method" );
            },
            getString: function() {
                return stringValue;
            }
        };
    };

    return {
        getInstance: function () {
            if ( !singletonInstance ) {
                singletonInstance = init();
            }
            return singletonInstance;
        }
    };
})()

//Example            
console.log(mySingleton.getInstance().getString());