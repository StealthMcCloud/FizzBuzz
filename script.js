let count1 = 0
let count1_1 = document.getElementById("count1_1")
while (count1 < 1000) {
    count1++;
    console.log(count1);

    if (count1 == 2 % 0) { 
        count1 += 2;
        let count1 =  count1.bold();
    }

    else if (count1 == 3 % 0) { 
        count1 += 3;
        let count1 = count1.fontcolor("red");
        console.log(count1);


    }
    count1_1.innerHTML = count1
}

