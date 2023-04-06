export const getPosts = async (platform = 'hacker', query = 'recent') => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/v1/${platform}/${query}`,
  )
  const { data } = await response.json()
  return data
}
