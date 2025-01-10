import { useState, useEffect} from "react"
import { User } from "../interfaces/reqres.response"
import { loadUsersAction } from "../actions/load-users"

export const useUsers = () => {
    const [users, setUsers ]= useState<User[]>([])
    useEffect(() => {
      loadUsersAction(1)
        .then( setUsers())
    }, [])
    
  return {
    users
  }
}
