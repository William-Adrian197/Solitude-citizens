import { useState, useEffect } from 'react'
import { useParams, Navigate,useNavigate, useLocation } from 'react-router-dom'
import Button from './Button'

function CitizenDetails() {
  const [loading,setLoading] = useState(true)
  const [citizen, setCitizen] = useState({})
  const [error,setError] = useState(null)

  const params = useParams();
  const navigate = useNavigate();  
  const {pathname} = useLocation();

  useEffect(()=> {
    const fetchOneCitizen = async () => {       
      const res = await fetch(`http://localhost:5000/citizens/${params.id}`)
      const data = await res.json()

      if(res.status === 404) {
        navigate('/')
      }

      setCitizen(data)
      setLoading(false)
    }

    fetchOneCitizen()
  },[])

  if (error) {
    return <Navigate to='/' />
  }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <p>{pathname}</p>
      <h3>{citizen.name}</h3>
      <p> {citizen.race}</p>
      <Button 
        onClick={()=> {navigate(-1)}} 
        text='Go Back' 
        />
    </div>
  )
}

export default CitizenDetails