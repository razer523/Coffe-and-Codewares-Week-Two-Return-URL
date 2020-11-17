//  SOLUTION 1
function removeUrlAnchor1(url) {
    let newString = "";
    let flag = false;

    for(let i=0; i<url.length; i++){
        if(!flag){
            if(url[i] === "#") {
                flag=true;
            }
            else{
                newString += url[i];
            }
        }
    }
    console.log(newString);
}

removeUrlAnchor1('www.codewarz.com#about');
removeUrlAnchor1('www.codewarz.com?page=1');

//  SOLUTION 2
function removeUrlAnchor2(url) {
    let newString = "";
    let flag = false;

    for(let i=0; i<url.length; i++){
        if(url[i] != "#") {
            newString += url[i];
        }
        else{
            break;
        }
    }
    console.log(newString);
}

removeUrlAnchor2('www.codewarz.com#about');
removeUrlAnchor2('www.codewarz.com?page=1');

//   SOLUTION 3 USING ARRAY SPLIT

function removeUrlAnchor3(url) {
    let stringArray = url.split("#");
    console.log(stringArray[0]);
}

removeUrlAnchor3('www.codewarz.com#about');
removeUrlAnchor3('www.codewarz.com?page=1');

//   SOLUTION 4 USING SUBSTRING

function removeUrlAnchor4(url){
    let anchorIndex = url.indexOf("#"); //url without # return -1, will return empty array due to out of bounds
    if(anchorIndex == -1){              // solution here for out of bounds array
        anchorIndex = url.length;
    }
    let newString2 = url.substring(0, anchorIndex);
    console.log(newString2);
}

removeUrlAnchor4('www.codewarz.com#about');
removeUrlAnchor4('www.codewarz.com?page=1');