var personModule = (function () {
    var name = "John";
    var surname = "Doe";

    function printName() {
        alert( "Name : "+ name );
    }

    function printSurname() {
        alert( "Surname : "+ surname );
    }
    
    function publicSetName( newName ) {
        name = newName;
    }

    function publicSetSurname( newSurname ) {
        surname = newSurname;
    }

    function publicGetName() {
        printName();
    }

    return {
        setName: publicSetName,
        setSurname: publicSetSurname,
        getName: publicGetName
    };

})();

//Will print John
personModule.getName();

//Change Name to Smith
personModule.setName('Charlie');

//Will print Charlie
personModule.getName();