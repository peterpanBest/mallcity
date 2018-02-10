export default {
    checkPhoneNum: function(value){
       let _conditon =  (/^1[1|3|4|5|7|8][0-9]{9}$/).test(value);
       if(!_conditon){
           return false;
       }else{
           return true;
       }
    },
    getDate: function(){
        let timeObj = {
            year: "",
            month: "",
            week: "",
            day: "",
            h:"",
            m:"",
            s:""
        };

        let dt = new Date();
        let y = dt.getFullYear();
        let m = dt.getMonth();
        let d = dt.getDate();
        let h = dt.getHours();
        let mm = dt.getMinutes();
        let s = dt.getSeconds();

        if(m<10)m="0"+m;
        if(d<10)d="0"+d;
        if(h<10)h="0"+h;
        if(mm<10)mm="0"+mm;
        if(s<10)s="0"+s;

        timeObj.year = y;
        timeObj.month = m;
        timeObj.week = "星期"+"日一二三四五六"[dt.getDay()];
        timeObj.day = d;
        timeObj.h = h;
        timeObj.m = mm;
        timeObj.s = s;
        
        return timeObj;
    },
    getQueryString: function(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);  //这里返回找到正则的匹配
     
        if (r != null) {
           return unescape(r[2]);    //这里返回对应的值
        }
        return false;
     }
}