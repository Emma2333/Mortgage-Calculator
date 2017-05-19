/**
 * Created by Administrator on 2017/5/19.
 */
//计算函数—四舍五入函数
function round(num,scale) {
    var result=Math.round((num * Math.pow(10, scale))) / Math.pow(10, scale);
    return result;
}
function cal() {
    var unitprice=getValue("unitprice");
    var rent=parseFloat(getValue("rent"));
    var cost=parseFloat(getValue("cost"));
    var area=parseFloat(getValue("area"));
    var first=parseFloat(getValue("first"));
    var interest=parseFloat(getValue("interest"));

    document.getElementById("firstResult").innerHTML=round((unitprice*area*first/10),2);
    document.getElementById("totalResult").innerHTML=round((unitprice*area*(1-first/10)),2);
    document.getElementById("monthResult").innerHTML=round((unitprice*area*(1-first/10)*interest/12),2);
    document.getElementById("rentResult").innerHTML=round((rent*area),2);
    document.getElementById("costResult").innerHTML=round((cost*area),2);

}

function getValue(ele) {
    return document.getElementById(ele).value;
}