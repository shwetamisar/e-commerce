import React from 'react'

const Landing = () => {
    const getData = async() => {
        try{
        //   const res = await fetch("/api/products");
        //   console.log(res.data);
        //   console.log(await res.json());
        const creds = {
            email: "adarshbalika@gmail.com",
            password: "adarshbalika"










































































































































            
        }
        const res = await fetch("/api/auth/login",{
            method:'POST',
            body:JSON.stringify(creds)
        });
        
        console.log(await res.json());
        }
        catch(e){
            console.error(e);
        }

    }
  return (
    <div>
      <h3 onClick={getData}>Hello NeoG people1</h3>

    </div>
  )
}

export default Landing
