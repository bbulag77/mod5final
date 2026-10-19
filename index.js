
async function main() {
    const mtitle = "The Fast and the Furious"
    console.log({mtitle});
    const Plots = "full"
    const website = "https://www.omdbapi.com/?t=ncis&plot=full&apikey=6fb74029"
    //const website = "http://www.omdbapi.com/?apikey=6fb74029&t=${mtitle}&plot=${Plots}"
    console.log({website});
    //console.log("window.location", window.location.href);
    const users=await fetch({website});
    console.log(users);
    const usersData=await users.json();
    console.log("usersData:", usersData);
    
}