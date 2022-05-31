function generate(arr) {
    for (let k = 0; k < 1000; k++) {
        let num = Math.floor(1000 + Math.random() * 9000);
        arr.push(num)
        for (let i = 0; i < arr.length; i++) {
            const stash = String(arr[i]).split('')
            // unique 
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                    let num = Math.floor(1000 + Math.random() * 9000);
                    arr.push(num)
                }
                //not same
                if (stash[0] == stash[1] ||
                    stash[1] == stash[2] ||
                    stash[2] == stash[3]) {
                    arr.splice(i, 1);
                    let num = Math.floor(1000 + Math.random() * 9000);
                    arr.push(num)
                }
                //not increment
                if ((stash[0] < stash[1] && stash[1] < stash[2]) || (stash[1] < stash[2] && stash[2] < stash[3])) {
                    arr.splice(i, 1);
                    let num = Math.floor(1000 + Math.random() * 9000);
                    arr.push(num)
                }
            }
        }
    }
    return arr
}

export default generate