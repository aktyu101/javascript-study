
/**
 * 1228 과제
 */
window.addEventListener("load", () => {
    document.write("별찍기", "<br />");
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++){
            document.write("*");
        }
        document.write("<br />")
    }
    
    document.write("<br />", "--------------------------------", "<br />");

    document.write("삼각형", "<br />");
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++){
            document.write("*");
        };
        document.write("<br />")
    }

    document.write ("<br />", "----------------------------------", "<br />");
    
    document.write("역삼각형", "<br />");
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < i; j++) {
            document.write("&nbsp");
        };
        for (let j = 5; j > i; j--){
            document.write("*");
        };
        document.write("<br />")
    }
    
    document.write ("<br />", "----------------------------------", "<br />")
    
    document.write("정삼각형", "<br />");
    for(let i = 0; i < 5; i++) {
        for(let j = 4; j > i; j--) {
            document.write("&nbsp");
        }
        for(let j = 0; j <= i; j++) {
            document.write("*");
        }
        for(let j = 0; j < i; j++) {
            document.write("*");
        }
        document.write("<br />");
    }

    document.write ("<br />", "----------------------------------", "<br />")

    document.write("역정삼각형", "<br />");
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

    document.write ("<br />", "----------------------------------", "<br />");

    document.write("마름모", "<br />");
    for(let i = 0; i < 4; i++) {
        for(let j = 4; j > i; j--) {
            document.write("&nbsp");
        }
        for(let j = 0; j <= i; j++) {
            document.write("*");
        }
        for(let j = 0; j < i; j++) {
            document.write("*");
        }
        document.write("<br />");
    }
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
});

