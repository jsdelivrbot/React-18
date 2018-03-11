import React from 'react';

const Forms = props =>(
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="City" placeholder="City..."></input>
      <input type="text" name="Country" placeholder="Country..."></input>
      <button>Get Weather</button>
    </form>
  </div>
);

export default Forms;
