import Link from 'next/link'

export default function linkedText(text) {
    const words = text.split(" ")
    let list = words.map((word, index) => {
        if (word.slice(0, 1) === '@') {
            return (
                <>
                    <Link key={index} href={`/${word.slice(1)}`}>
                        <a>{word}</a>
                    </Link>
                </>
            )
        }
        if (word.slice(0, 1) === '#') {
            return (
                <>
                    <Link key={index} href={`/hashtag/${word.slice(1)}`}>
                        <a>{word}</a>
                    </Link>
                </>
            )
        }
        return word
    })
    let temp = []
    let final = []
    let itemType = null
    const content = list.map((item, index) => {
        if (typeof (item) === 'object') {
            temp.length > 0 ? final.push(temp.join(" ") + " ") : ""
            final.push(item)
            temp = []
            itemType = 'object'
        } else {
            if(index == 0) {
                temp.push(item)
            } else {
                temp.push(" " + item)
            }
            itemType = 'string'
        }
        if (list.length - 1 === index && itemType === 'string') {
            final.push(" " + temp.join(" "))
            return final
        }
    })
    return (
        content
    )
}
