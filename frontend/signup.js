
console.log("hello")
let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
     e.preventDefault()
      console.log("hello")
      let payload={

        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
       
      }
      console.log(payload)
 

      fetch("https://dull-belt-colt.cyclic.app/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    
      }).then((res)=>{
        return  res.json()

      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
   
      
})