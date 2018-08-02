for (let count1 = 1; count1 <= 1000; count1++) {
    
    if (count1 % 2 == 0 && count1 % 3 == 0) {
    document.write("<div class='bold, red'>" + count1 + "</div>")
}

    else if ( count1 % 2 == 0) { 
        document.write("<div class='bold'>" + count1 + "</div>");
    }

    else if (count1 % 3 == 0) { 
        document.write("<div class='red'>" + count1 + "</div>");
    }

    else {
        document.write("<div>" + count1 + "</div>")
    }
}

// for (let class1 = 1; i <= 1000; class1++) {
//     const div = document.createElement("div");
//     div.textcontent = class1;
//     if (class1 % 3 ==0) {
//         div.classList.add("red");
//     }

//     if (class1 % 2 == 0) {
//         div.classList.add("bold");
//     }
// }