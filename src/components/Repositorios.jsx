import { useState, useEffect } from 'react'
function Repositorios(){
    const [repos, setRepos] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://api.github.com/users/guacirita/repos")
            const data = await response.json()

            setRepos(data)
        }
            getData()
    }, [])

    return(
        <>
            <h2>Nomes dos meus repos</h2>
            {
                repos.map(repo => {
                    return(

                            <p>{repo.name}</p>
                    
                    )
                })
            }
        </>
   
        
    )
}
export default Repositorios