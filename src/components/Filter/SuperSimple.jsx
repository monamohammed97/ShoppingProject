import * as React from "react";
import { Range } from "react-range";

export class SuperSimple extends React.Component {
  state = { values: [10] };
  render() {
    return (
      <Range
        step={0.1}
        min={5}
        max={25}
        values={this.state.values}
        onChange={(values) => this.setState({ values })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#999",
              borderRadius: "50%"
            }}
          />
        )}
      />
    );
  }
}
