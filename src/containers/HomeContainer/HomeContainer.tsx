import React from "react"
import { IPost, TAnyObjWithID } from "../../types"
import { 
    parseCSV,
    generateCSV,
    downloadCSV,
    getCompletedPosts,
    generateQueryByIDs
} from "../../utils"
import { getPosts } from "../../providers"
import { Home } from "../../components"

const HomeContainer = () => {
    const [CSVPosts, setCSVPosts] = React.useState([] as IPost[])
    const [suppliedPosts, setSuppliedPosts] = React.useState([] as IPost[])
    const [parsingError, setparsingError] = React.useState("" as string)
    const [fetchingError, setFetchingError] = React.useState("" as string)
    const [loading, setLoading] = React.useState(false as boolean)
    

    React.useEffect(() => {
        if (suppliedPosts.length) {
            const completedPosts = getCompletedPosts(CSVPosts, suppliedPosts)
            const csv = generateCSV(completedPosts)
            downloadCSV(csv, "posts")
            setLoading(false)
        }
    }, [suppliedPosts.length])
    
    
    React.useEffect(() => {
        if (CSVPosts.length) {
            const fetchData = async () => {
              const postsQuery = generateQueryByIDs(CSVPosts as TAnyObjWithID[])
              const data = await getPosts(postsQuery)

              if (data.error) {
                setFetchingError(data.error)
                setLoading(false)
              } else {
                if (data.data.length) {
                    setSuppliedPosts(data.data)
                } else {
                    setFetchingError("No data")
                    setLoading(false)
                }
              }
            }
            fetchData()
        }
    }, [CSVPosts.length])


    const clickHandler = (): void => {
        reset()
        setLoading(true)
        const completeCb = (CSVPosts: IPost[] | unknown[]): void => {
            if (CSVPosts.length) {
                setCSVPosts(CSVPosts as IPost[])
            } else {
                setparsingError("No data")
                setLoading(false)
            }
        }
        const errorCb = (parsingError: string): void => {
            setparsingError(parsingError)
            setLoading(false)
        }
        parseCSV(completeCb, errorCb)
    }

    const reset = () => {
        setCSVPosts([])
        setSuppliedPosts([])
        setparsingError("")
        setFetchingError("")
        setLoading(false)
    }
    
    return <Home
        CSVPosts={CSVPosts}
        suppliedPosts={suppliedPosts}
        clickHandler={clickHandler}
        parsingError={parsingError}
        fetchingError={fetchingError}
        loading={loading}
    />
}
  
export default HomeContainer