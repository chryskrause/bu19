import React from 'react';
import BoxInfo from "./BoxInfo"


function App() {
  return (
    <div>
        <BoxInfo 
        contact={{name: "Harry", subtitle: "Wizard", information: "Troubled youth. Abuse victim. The chosen one. Brave to the point of recklessness."}}
        />
        <BoxInfo 
        contact={{name: "Ron", subtitle: "Wizard", information: "Ginger crybaby.  Almost all of his family is cooler than him."}}
        />
        <BoxInfo
        contact={{name: "Hermoine", subtitle: "Witch/Genius", information: "The real hero. Very English."}}
        />
        <BoxInfo
        contact={{name: "Albus", subtitle: "Wizard Supreme", information: "Magical grandpa professor, the absolute OG."}}
        />
        <BoxInfo
        contact={{name: "Draco", subtitle: "Wizard/Douche/very stable genius", information: "His father's son. Misunderstood bully."}}
        />
        <BoxInfo
        contact={{name: "Tom", subtitle: "Wizard/Pure Evil", information: "Evil incarnate. Supreme douchelord.  Homocidal maniac."}}
        />
        <BoxInfo
        contact={{name: "Bellatrix", subtitle: "Witch", information: "Insane in the membranes."}}
        />
        <BoxInfo
        contact={{name: "Minerva", subtitle: "Witch", information: "Coincidentally, looks just like Maggie Smith."}}
        />
        <BoxInfo
        contact={{name: "Dobby", subtitle: "House Elf", information: "Avid collector of clothing. History of trauma."}}
        />
        <BoxInfo
        contact={{name: "Buckbeak", subtitle: "Hippogriff", information: "Eagle horse dog. No hippo included. Will rip your eyelids off if disrespectful."}}
        />
    </div>
)
}

export default App;
