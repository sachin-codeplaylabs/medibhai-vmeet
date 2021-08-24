
class Utility {
    static getIntialOfName(name){
        if(name && name !== null && name.length > 0){
            var splitedName = name.split(' ');

            if (splitedName.length > 1) {
              return splitedName[0].charAt(0) + splitedName[1].charAt(0);
            } else if (splitedName[0].length > 1) {
              return splitedName[0].charAt(0) + splitedName[0].charAt(1);
            }
            return splitedName[0].charAt(0) + ' ';
        }
        return "NA";
    }    
}
  
  export default Utility;
  