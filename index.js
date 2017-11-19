function theBeatlesPlay (musicians, instruments){
    var empty = [];
    for (let i = 0; i < musicians.length; i++){
        empty.push(musicians[i] + " plays " + instruments[i])
      }
      return empty;
}

function johnLennonFacts(facts){
    let i=0;
    var newfacts = [];
    while (i<facts.length) {
      newfacts.push(facts[i] + "!!!", ...facts);
      i++;
    }
    return newfacts;
}
