/**
 * 1224 - 이중 for문
 */
window.addEventListener("load", () => {
    for (let i = 0; i < 5; i++) { //다시 for문을 수행
        for (let j = 0; j < 5; j++){
            document.write("*"); //먼저 찍고나서 
        }
        document.write("<br />")
    }
    document.write("<br />", "------------------------------", "<br />")

    for (let i = 0; i < 5; i++) {
        // i = 0;
        // i = 1;
        // i = 2;
        // i = 3;
        // i = 4;
        // i = 5;

        for (let j = 0; j <= i; j++){
            document.write("*");
        }
        document.write("<br />")
    }

    document.write("<br />", "------------------------------", "<br />");

    for(let i = 0; i < 5; i++){
        for (let j = 0; j < i; j++){
            document.write("&nbsp;"); //공백문자
        }
        for (let j = 5; j > i; j--){
            document.write("*");
        }
        document.write("<br />");
    }

    document.write("<br />", "------------------------------", "<br />");

    for(let i = 0; i < 5; i++){
        for(let j = 4; j > i; j--){
            document.write("&nbsp;");
        }
        for (let j = 0; j <= i; j++) {
            document.write("*");
        }
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br />");
    }

    document.write("<br />", "------------------------------", "<br />");

    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < i; j++) {
            document.write("&nbsp");
        }
        for(let j = 5; j > i; j--) {
            document.write("*");
        }
        for(let j = 4; j > i; j--) {
            document.write("*");
        }
        document.write("<br />");
    }

    document.write("<br />", "------------------------------", "<br />");

    for(let i = 0; i < 5; i++){
        for(let j = 4; j > i; j--){
            document.write("&nbsp;");
        }
        for (let j = 0; j <= i; j++) {
            document.write("*");
        }
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br />");
    }
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j <= i; j++) {
            document.write("&nbsp");
        }
        for(let j = 4; j > i; j--) {
            document.write("*");
        }
        for(let j = 3; j > i; j--) {
            document.write("*");
        }
        document.write("<br />");
    }

});


