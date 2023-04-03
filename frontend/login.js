let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
     e.preventDefault()
      console.log("hello")
      let payload={

        email:form.email.value,
        password:form.password.value,
       
      }
 

      fetch("https://dull-belt-colt.cyclic.app/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    
      }).then((res)=>{
        return  res.json()

      }).then((res)=>{
        console.log(res)
        localStorage.setItem("token",res.token)
      }).catch((err)=>{
        console.log(err)
      })
   
      
})