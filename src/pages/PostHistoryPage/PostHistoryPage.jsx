import { checkToken } from '../../utilities/users-service'

function PostHistoryPage() {
  
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken()
      alert(expDate.toLocaleString())
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
      <div>
      <h1>PostHistoryPage</h1>
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
      </div>
    )
  }
  
  export default PostHistoryPage