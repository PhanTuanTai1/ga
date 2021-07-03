function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

(async () => {
    for(let i = 1; i <= numberAccount; i++) {
        let body = await objectifyForm(document.getElementsByTagName('form')[0]);
        let res = await $.post('http://id.vl2tuyetthe.com/register', body);
        location.reload();
    }
})()
