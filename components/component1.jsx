function Component1 () {

    const style = { background: "yellow" };

    function perfict (arg) {
        if(arg % 2 === 0) {
            return true
        }
        return false
    }
    return (
        <div style={style}>
        Hello component
        </div>
    )
}