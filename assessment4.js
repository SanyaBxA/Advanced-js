const getProfile= async()=>{
    try{
        const username='SanyaBxA';
        const response= await fetch('https://api.github.com/users/{username}');
        if(!response.ok){
            throw new error('HTTP error!')
        }
        const data= await response.json();
        console.log(data);

    }
    catch(error){
        console.log("failed to fetch.")
    }

    getProfile();
}