function validateRegEx(eleName,reg) {
    var obj=document.getElementById(eleName);
    var str=document.getElementById(eleName+'Msg');
    if(obj.value!="") {
        if (reg.test(obj.value)) {
            obj.className = "right";
            if (str != null) {
                str.innerHTML = "输入格式正确";
                str.className = "right";
            }
            return true;
        } else {
            obj.className = "wrong";
            str.innerHTML = "输入格式错误";
            str.className = "wrong";
            return false;
        }
    } else {
        obj.className = "wrong";
        str.innerHTML = "内容不能为空";
        str.className = "wrong";
        return false;
    }

}
function validateEmpty(eleName) {
    var obj=document.getElementById(eleName);
    var str=document.getElementById(eleName+'Msg');
    if(obj.value!=""){
        if(str!=null){
            if(obj.value!=""){
                obj.className="right";
                str.innerHTML="输入格式正确";
                str.className="right";
                return true;
            }else{
                obj.className="wrong";
                str.innerHTML="内容不可为空！";
                str.className="wrong";
                return false;
            }
        }
    }

}
