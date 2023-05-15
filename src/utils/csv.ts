import { readRemoteFile, jsonToCSV } from 'react-papaparse'
import { IPost } from "../types"

const CSV_URL = "https://ilyafd.github.io/csv-placeholder/data/posts.csv"

export const parseCSV = (
    completeCb: (data: IPost[] | unknown[]) => void, 
    errorCb: (error: string) => void
): void => {
    readRemoteFile(
        CSV_URL,
        {
            header: true,
            skipEmptyLines: true,
            download: true,
            complete: (results) => {
                completeCb(results.data)
            },
            error: (error) => {
                errorCb("Parsing error")
            }
        }
    )
}

export const generateCSV = (content: IPost[]): string => jsonToCSV(content, {delimiter: ';'})

export const downloadCSV = (csv: string, fileName: string): void => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${fileName}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}