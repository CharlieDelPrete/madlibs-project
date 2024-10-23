document.addEventListener("DOMContentLoaded", function() {
    let Name=prompt("Enter an adjective.");
    let  Creature= prompt("Scary creature");
    let  Place= prompt ("Enter an Place.");
    let adjective=prompt("Enter an adjective.");
    let  adjective2= prompt("Enter an adjective.");
    let Creature2= prompt("Scary creature");
    let  Name2=prompt("Enter an adjective.");
    
    let story = `On the night of halloween ${Name}, and 
    his friends were venturing around the town wondering when they 
    were going to find the ${Creature}. When they 
    got to the ${Place} they realized that they didnt have time to 
    get home before it was dark so they started to ${adjective2} 
    when they reached ${adjective2} they saw ${Creature2} they started 
    to run and they didnt know what to do he was catching up. As soon as ${Name2}
    feel the monster was moments away from catching up. AHHHHHHH he yelled as he 
    woke up quickly to his alarm clock squeeling. It was finally halloween `
    
    let madLibOutputDiv = document.getElementById("madLibOutput");
    
    madLibOutputDiv.innerHTML = `<p>${story}</p>`;
});
