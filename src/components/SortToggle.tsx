type Props = {
    sorted: boolean
    toggle: () => void
}

const SortToggle = ({ sorted, toggle}: Props) => {
    return (
        <button onClick={toggle}>{sorted ? "Unsort" : "Sort by Priority"}</button>
    )
}

export default SortToggle