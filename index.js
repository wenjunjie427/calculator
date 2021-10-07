var Binding = require('../../utils/binding');
Page({
  data: {
    array: ['ac','+/-','%','/',
            '7','8','9','*',
            '4','5','6','-',
            '1','2','3','+',
            '0','.','='],
    currentEnd: '0',
    operator: '',
  },
  bindtap: function(res){
    var index = res.currentTarget.dataset.index;
    var currentEnd = this.data.currentEnd;
    var operator = this.data.operator;
    if (index==0){
      currentEnd = '0';
      operator = '';
    }else if (index==1){
      var endW = operator.substr(-1,1);
      if (endW == '%' || endW=='/' || endW=='*' || endW=='+' || endW=='-') {
        console.log("最后是运算符，不做处理");
      }else{
        var str = operator.substr(0,operator.length - (currentEnd + '').length);
        currentEnd = currentEnd * 1;
        currentEnd = -currentEnd;
        operator = str +(currentEnd + '');
      }
    }else if (index==17){
      var endW = operator.substr(-1,1);
      if (endW=='%' || endW=='/' || endW=='*' || endW=='+' || endW=='-') {
        console.log("最后是运算符，不做处理");
      }else {
        if ((currentEnd + '').indexOf('.') == -1) {
          if (currentEnd == 0) {
            currentEnd = currentEnd + '.';
            operator = currentEnd;
          }else {
            currentEnd = currentEnd + '.';
            operator = currentEnd;
          }
        } else {
          console.log('已经是小数了，不做处理');
        }
      }
    }else if (index==18){
      var endW = operator.substr(-1,1);
      if (endW=='%' || endW=='/' || endW=='*' || endW=='+' || endW=='-' || endW=='.') {
        operator = operator.substr(0,operator.length - 1);
      }
      currentEnd = wx.binding.eval(operator);
      operator = '';
    }else if (index==2){
      operator = this.fuhaoFun(operator,'%',currentEnd);
    }else if (index==3){
      operator = this.fuhaoFun(operator,'/',currentEnd);
    }else if (index==7){
      operator = this.fuhaoFun(operator,'*',currentEnd);
    }else if (index==11){
      operator = this.fuhaoFun(operator,'-',currentEnd);
    }else if (index==15){
      operator = this.fuhaoFun(operator,'+',currentEnd);
    }else if (index==16){
      currentEnd = this.yunsuanFun(operator,currentEnd,0);
      operator += '0';
    }else if (index==4){
      currentEnd = this.yunsuanFun(operator,currentEnd,7);
      operator += '7';
    }else if (index==5){
      currentEnd = this.yunsuanFun(operator,currentEnd,8);
      operator += '8';
    }else if (index==6){
      currentEnd = this.yunsuanFun(operator,currentEnd,9);
      operator += '9';
    }else if (index==8){
      currentEnd = this.yunsuanFun(operator,currentEnd,4);
      operator += '4';
    }else if (index==9){
      currentEnd = this.yunsuanFun(operator,currentEnd,5);
      operator += '5';
    }else if (index==10){
      currentEnd = this.yunsuanFun(operator,currentEnd,6);
      operator += '6';
    }else if (index==12){
      currentEnd = this.yunsuanFun(operator,currentEnd,1);
      operator += '1';
    }else if (index==13){
      currentEnd = this.yunsuanFun(operator,currentEnd,2);
      operator += '2';
    }else if (index==14){
      currentEnd = this.yunsuanFun(operator,currentEnd,3);
      operator += '3';
    }
    console.log(operator+'='+currentEnd);
    this.setData({
      currentEnd: currentEnd,
      operator: operator,
    })
  },

  yunsuanFun : function (operator,currentEnd,num){
    if (operator.length == 0){
      currentEnd = num;
    }else {
      if (currentEnd == 0) {
        currentEnd = num;
      }else {
        currentEnd = operator + num;
      }
    }
    return currentEnd;
  },

  fuhaoFun: function(operator,fuhao,currentEnd){
    if(operator.length==0){
      operator = currentEnd + fuhao;
      return operator;
    }
    var endW = operator.substr(-1,1);
    if (endW == '%' || endW=='/' || endW=='*' || endW=='+' || endW=='-') {
      operator = operator.substr(0,operator.length-1);
      operator += fuhao;
    }else if(endW == '.'){
      operator = operator + '0' + fuhao;
    }else {
      operator += fuhao;
    }
    return operator;
  }
})