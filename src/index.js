module.exports = function check(str, bracketsConfig) {
    for(let i=0;i<str.length;i++){
      for(j=0;j<bracketsConfig.length;j++){
        let tmp="";
        tmp=bracketsConfig[j][0]+""+bracketsConfig[j][1];
      if(str.includes(tmp)){
        str=str.replace(tmp,"");
        i=0;
        j=0;
      }
    }
  }
  return str.length==0?true:false;
}
