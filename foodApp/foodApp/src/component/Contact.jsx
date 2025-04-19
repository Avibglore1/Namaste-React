import React, { useEffect } from 'react'

 function Contact() {
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const response = await fetch('https://o331401.ingest.sentry.io/api/4504752131538944/envelope/?sentry_key=1d6e186a1e094eae83aac5c86526ad37&sentry_version=7&sentry_client=sentry.javascript.nextjs%2F7.42.0');
        const data = await response.json();
        console.log(data);
    }
    
    
  return (
    <div>Contact</div>
  )
}

export default Contact