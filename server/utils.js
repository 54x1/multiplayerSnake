module.exports = {
  makeid,
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';
   // = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;

}
function getVal(){
  $.getJSON("perks.json", function(data, perkOne, perkTwo){

      var randIn = Math.floor(Math.random() * (data.perks.length));
      var randIn2 = Math.floor(Math.random() * (data.perks.length));
        var perkValue1 = data.perks[randIn].card;
          var perkValue2 = data.perks[randIn2].card;
          var perkOne = perkValue1;
            var perkTwo = perkValue2;
               return {perkOne, perkTwo};

  });
}
