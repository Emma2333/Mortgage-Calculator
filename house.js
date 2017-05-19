/**
 * Created by Administrator on 2017/5/19.
 */
function validate_unitprice() {
    return validateRegEx("unitprice",/^\d+(\.\d{1,2})?$/);
}
function validate_rent() {
    return validateRegEx("rent",/^\d+(\.\d{1,2})?$/);
}
function validate_cost() {
    return validateRegEx("cost",/^\d+(\.\d{1,2})?$/);
}
function validate_area() {
    return validateRegEx("area",/^\d+(\.\d{1,2})?$/);
}
function validate_interest() {
    return validateRegEx("interest",/^\d+(\.\d{1,2})?$/);
}

window.onload=function () {
    document.getElementById('unitprice').addEventListener("blur",validate_unitprice,false);
    document.getElementById('rent').addEventListener("blur",validate_rent,false);
    document.getElementById('cost').addEventListener("blur",validate_cost,false);
    document.getElementById('area').addEventListener("blur",validate_area,false);
    document.getElementById('interest').addEventListener("blur",validate_interest,false);

    var treles=document.getElementsByTagName("tr");
    for(var i=0;i<treles.length;i++){
        treles[i].onmouseover=function () {
            this.bgColor="#f2f2f2";
        }
        treles[i].onmouseout=function () {
            this.bgColor="#ffffff";
        }
    }

}



