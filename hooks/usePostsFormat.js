import React from 'react'

const usePostsFormat = (list) => {
    let rows = [],
        columns = []
    list.map((post, index) => {
        index++
        if (index % 3 == 0) {
            columns.push(post)
            rows.push(columns)
            columns = []
        } else {
            columns.push(post)
        }
    })
    const remaining = list.length % 3
    if (remaining) {
        let add = 3 - remaining
        for (let index = 0; index < add; index++) {
            columns.push({})
        }
        rows.push(columns)
    }

    return rows
}

export default usePostsFormat
