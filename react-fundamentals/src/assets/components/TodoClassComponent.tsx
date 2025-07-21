import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null; // No state change
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true; // Always allow update
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("📸 getSnapshotBeforeUpdate");
    return null; // Snapshot before update
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("❌ componentWillUnmount");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("3️⃣/🔁 render");
    return (
      <div style={{ border: "2px solid green", padding: "16px", marginTop: "10px" }}>
        <h2>React Class Component Lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Parent component to mount/unmount LifecycleDemo
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  toggleComponent = () => {
    this.setState((prev) => ({ show: !prev.show }));
  };

  render() {
    return (
      <div>
        <h1>React Lifecycle Example</h1>
        <button onClick={this.toggleComponent}>
          {this.state.show ? "Unmount" : "Mount"} Component
        </button>
        {this.state.show && <LifecycleDemo />}
      </div>
    );
  }
}

export default App;
