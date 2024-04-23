import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      pic={emoji.emoji}
      name={emoji.name}
      content={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
