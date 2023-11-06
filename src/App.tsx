import React from "react";

class App extends React.Component<{},{}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <React.StrictMode>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore delectus saepe, distinctio architecto totam assumenda voluptas. Nihil sapiente vitae, voluptate deleniti totam accusamus quidem beatae assumenda enim architecto? Beatae, voluptas.
      </React.StrictMode>
    )
  }
}
export default App;