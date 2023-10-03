import UpdateUser from "../../components/UpdateUser/UpdateUser";

function UpdateUser({user, setUser}) {
  
  function handleChange(evt){
    setPost({...post, [evt.target.name]: evt.target.value});
  }
  
  const handleSubmit = async (evt) => {
    evt.preventDefault() 
      try {
        const postData = { ...post };
      const createdPost = await createPost(postData);
      console.log(createdPost)
      }
    catch (error)  {
      console.log(error)
    }
  }
    
  return (
      <div>

<UpdateUser user={user} setUser={setUser} />
      </div>
    )
 
  }
  
  export default UpdateUser