import "./TrackButton.css"

interface IProps {
    enabled: boolean
}

function TrackButton(props: IProps) {
    const { enabled } = props
    return (
        <>
            { enabled ? <button type="submit">TRACK</button> : <button type="submit" className="disabled" disabled>TRACK</button>}
        </>
    )
}

export default TrackButton