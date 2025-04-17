let bubble = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
    
function  bbsort() 
{
    for (let i = 0; i < bubble.length; i++) 
        {
        if (bubble[i] > bubble[i +1]) 
            {
            let v1 = bubble[i]
            let v2 = bubble[i +1] 
            bubble[i] = v2
            bubble[i +1] = v1
        }
    }
}

for (let j = 0; j < bubble.length ; j++) {
    bbsort();
}

console.log(bubble)