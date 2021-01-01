export default function Container({children, ...props}) {
    return (
        <div className="container" {...props}>
            {children}
        </div>
    )
}
