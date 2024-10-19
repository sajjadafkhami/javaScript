

try{
    const arr = new Array();
    let size = prompt('طول آرایه را وارد کنید');
    arr.length = size;
    let method = prompt('نام یک متد را وارد کنید');
    let result = Math[method](10);
    console.log(result);
}catch(error){
    if(error instanceof RangeError){
        console.log('لطفا عدد صحیح را وارد کنید');
    }else if(error instanceof TypeError){
        console.log('لطفا متد صحیح را وارد کنید');

    }

}
