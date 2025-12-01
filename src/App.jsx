import { use, useEffect, useState } from 'react'
import './index.css'
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import Photos from './components/Photos.jsx'
import Todos from './components/Todos.jsx'
import Users from './components/Users.jsx'

function App() {
  const [reqType,setReqType] = useState("posts")
  const [loading,setLoading] = useState (true)
  const [error,setError] = useState (null)

  const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts"
  const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments"
  const PHOTOS_API_URL = "https://picsum.photos/v2/list"
  const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos"
  const USERS_API_URL = "https://jsonplaceholder.typicode.com/users"

  const [posts,setPosts] = useState([])
  const [comments,setComments] = useState([])
  const [photos,setPhotos] = useState([])
  const [todos,setTodos] = useState([])
  const [users,setUsers] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(POSTS_API_URL)
        if (!response.ok) throw Error ("Didnot receive posts")
        const listPosts = await response.json()
        setPosts(listPosts)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading (false)
      }
    }
    fetchPosts()
  },[posts])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch (COMMENTS_API_URL)
        if (!response.ok) throw Error ("didnt receive comments")
        const listComments = await response.json()
        setComments(listComments)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchComments()
  },[comments])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch (PHOTOS_API_URL)
        if (!response.ok) throw Error ("didnt receive photos")
        const listPhotos = await response.json()
        setPhotos(listPhotos)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPhotos()
  },[photos])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch (TODOS_API_URL)
        if (!response.ok) throw Error ("didnt receive todos")
        const listTodos = await response.json()
        setTodos(listTodos)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTodos()
  },[todos])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch (USERS_API_URL)
        if (!response.ok) throw Error ("didnt receive users")
        const listUsers = await response.json()
        setUsers(listUsers)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  },[users])

  return (
    <>
      <Header setReqType={setReqType}/>
        {loading && <p className='mt-50 text-center'>Data is loading .....</p>}
        {error && <p className='mt-50 text-center'>Error : {error}</p>}
        {!loading && !error &&(
          <>
          {reqType === "posts" && <Posts posts={posts} comments={comments}/>}
          {reqType === "photos" && <Photos photos={photos}/>}
          {reqType === "todos" && <Todos todos={todos}/>}
          {reqType === "users" && <Users users={users}/>}
          </>
        )}
    </>
  )
}

export default App
