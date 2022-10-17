import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)

  // /api/music/music_title
  const fetchData = async () => {
    try {
      const result = await (await fetch(`${url}`)).json()
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, []) // 컴포넌트가 처음 생긴 직후에만 실행 

  return { loading, fetchData }
}