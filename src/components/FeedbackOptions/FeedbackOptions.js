//
import { nanoid } from "nanoid";

export default function FeedbackOptions({ options, onLeaveFeedback }) {

    //console.log(typeof (options));


    return (
        <div>
            {
                options.map((el, index) => (
                    <button
                        key={nanoid()}
                        type="button"
                        value={el}
                        onClick={onLeaveFeedback}
                    >{el}</button>
                ))
            }
            {/* <button
                type="button"
                value="good"
                //onClick={this.handleChange}
            >Good</button>
            <button
                type="button"
                value="neutral"
                //onClick={this.handleChange}
            >Neutral</button>
            <button
                type="button"
                value="bad"
                //onClick={this.handleChange}
            >Bad</button> */}
        </div>
    )
}