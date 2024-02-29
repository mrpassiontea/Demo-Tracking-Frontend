import { useEffect, useState } from "react";
import TrackButton from "./TrackButton";
import "./TrackingInputForm.css";

function TrackingInputForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (trackingNumber.length >= 6 && trackingNumber.length <= 8) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [trackingNumber])

  return (
    <>
      <form>
        <div className="inputContainer">
          <label htmlFor="trackingNumber">SEARCH BY TRACKING NUMBER</label>
          <input
            type="number"
            id="trackingNumber"
            name="trackingNumber"
            minLength={6}
            maxLength={8}
            min={0}
            placeholder="Please enter a tracking number."
            title="Please enter a tracking number."
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </div>
        <TrackButton enabled={enabled}/>
      </form>
    </>
  );
}

export default TrackingInputForm;
