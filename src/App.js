import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        <h1>Artist Bollocks Generator</h1>
        <br />
        What is your name?
        <br />
        <br />
        <input
          type="text"
          value={getData("name")}
          onChange={event => setData("name", event.target.value)}
        />
        <br />
        <br />
        <br />
        What are your pronouns? (Her/His/Their)
        <br />
        <br />
        <input
          type="text"
          value={getData("pronoun")}
          onChange={event => setData("pronoun", event.target.value)}
        />
        <br />
        <br />
        <br />
        When is your birthday?
        <br />
        <br />
        <input
          type="date"
          value={getData("birthday")}
          onChange={event => setData("birthday", event.target.value)}
        />
        <br />
        <br />
        <br />
        What kind of designer or artist are you?
        <br />
        (eg.Product Designer)
        <br />
        <br />
        <input
          type="text"
          value={getData("desartist")}
          onChange={event => setData("desartist", event.target.value)}
        />
        <br />
        <br />
      </p>
    ),
    buttons: [{ label: "Next", page: "welcome" }]
  },

  welcome: {
    content: (getData, setName) => (
      <p>
        Hello, {getData("name")}! We need a few more information to generate
        your artist statement.
        <br />
        Now, tell me. What themes do your work explore?
        <br />
        <br />
        <br />
        Theme 1:
        <br />
        <input
          type="text"
          value={getData("theme1")}
          onChange={event => setName("theme1", event.target.value)}
        />
        <br />
        <br />
        <br />
        Theme 2:
        <br />
        <input
          type="text"
          value={getData("theme2")}
          onChange={event => setName("theme2", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Next", page: "inspiration" }]
  },
  inspiration: {
    content: (getData, setName) => (
      <p>
        Name two artist/designer that inspired your work.
        <br />
        <br />
        Name of Artist #1:
        <br />
        <br />
        <input
          type="text"
          value={getData("artist1")}
          onChange={event => setName("artist1", event.target.value)}
        />
        <br />
        <br />
        Name of Artist #2:
        <br />
        <br />
        <input
          type="text"
          value={getData("artist2")}
          onChange={event => setName("artist2", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Next", page: "fascination" }]
  },

  fascination: {
    content: (getData, setName) => (
      <p>
        What are you fascinated by?
        <br />
        <br />
        <input
          type="text"
          value={getData("fascination")}
          onChange={event => setName("fascination", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Generate my artist statement", page: "generated" }]
  },

  generated: {
    content: (getData, setName) => {
      return (
        <p>
          {getData("name")} is a {getData("desartist")} born{" "}
          {getData("birthday")}.
          <br />
          {getData("pronoun")} work explores the relationship between{" "}
          {getData("theme1")} and {getData("theme2")}.
          <br />
          With influences as diverse as {getData("artist1")} and{" "}
          {getData("artist2")},
          <br />
          new combinations are synthesised from both mundane and transcendant
          discourse.
          <br />
          Since young, {getData("name")} has always been fascinated by{" "}
          {getData("fascination")}.
          <br />
          What starts out as contemplation soon becomes manipulated into a
          tragedy of power,
          <br />
          leaving only a sense of chaos and the prospect of a new beginning.
          <br />
        </p>
      );
    },
    buttons: []
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: "",
      date: "",
      pronoun: "",
      desartist: "",
      theme1: "",
      theme2: "",
      artist1: "",
      artist2: "",
      fascination: ""
    };
  }

  goToPage(pageName) {
    if (pageName === "start") {
      this.setState({
        name: "",
        date: "",
        pronoun: "",
        desartist: "",
        theme1: "",
        theme2: "",
        artist1: "",
        artist2: "",
        fascination: ""
      });
    } else {
      this.setState({
        page: pageName
      });
    }
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName],
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
