const queryString = require("query-string");

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

    static getUserId(){
      const queryParmas = queryString.parse(window.location.search);
      var userId = null;
      if (queryParmas.user && queryParmas.user !== null) {
        userId = queryParmas.user;
      } 
      return userId;
    }
    static getRoomId(){
      const queryParmas = queryString.parse(window.location.search);
      var roomId = null;
      if (queryParmas.room && queryParmas.room !== null) {
        roomId = queryParmas.room;
      } 
      return roomId;
    }

    

}
  
  export default Utility;
  