import React, { useState } from 'react'
import '../../css/WFDComponent.css';

function WFDComponent() {

  const [voiceSpeed, setSpeed] = useState([]);

  function getTitle() {
    let title = "54 dictation sentenses update Jan 2019";
    return title;
  }

  return (
    <div className="container">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center uppercase">{getTitle()}</h2>
          <div className="mb-3 row">
            <label for="voices" className="col-sm-2 col-form-label">Select Voices : </label>
            <div className="col-sm-10">
              <select id="selectVoices"></select>
            </div>            
          </div>
          <div className='mb-3 row'>
            <label for="sources" className='col-sm-2 col-form-label'>Select Voices : </label>
            <div className='col-sm-10'>
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Click to select voice</button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">108 sentences of dictation (Most Repeated)</li>
              </ul>
            </div>
            </div>
          </div>
          <div className='mb-3 row'>
            <label for="sources" className='col-sm-2 col-form-label'>Select Sources : </label>
            <div className='col-sm-10'>
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Click to select source</button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">108 sentences of dictation (Most Repeated)</li>
                <li className="dropdown-item">54 DICTATION SENTENCES UPDATE JAN 2019</li>
                <li className="dropdown-item">3rd - July DICTATION SENTENCES UPDATE JULY 2019</li>
                <li className="dropdown-item">3rd - July REPEAT SENTENCES UPDATE JULY 2019</li>
              </ul>
            </div>
            </div>
          </div>
          <div className='mb-3 row'>
            <label for="voiceSpeed" className='form-label col-sm-2'>Voices speed : { voiceSpeed }</label>
            <span id="sliderValue" className='col-sm-1' style={{"font-size": "bold", "color": "red"}}>1.1</span>
            <div className="slidecontainer col-sm-8">
              <input type="range" min="0" max="5" value="2" className="slider form-range" id="slider" /></div>
          </div>
          <div>
            <button className="btn btn-primary">Play the sentence</button>
            <button className="btn btn-info" style={{"marginLeft": "10px"}}>Repeat</button>
          </div>
          <div>
            <p>Type Answer Here :</p>
            <textarea rows="3" cols="45" type="text" id="txtInput"></textarea>
          </div>
          <div>
            <button className="btn btn-success">Show the answer</button>
            <button className="btn btn-warning" style={{"marginLeft": "10px"}}>Count incorrect words</button>
          </div>
          <div>
            <p>Answer : </p>
            <textarea rows="3" cols="45" type="text" id="txtAnswer"></textarea>
          </div>
          <div>
            <label for="selectSentences">Select the sentence</label>
            <select id="selectSentences"></select>
          </div>
          <div>
            <input type="checkbox" id="chkIgnoreGroupTitle" value="0" checked /> <label for="chkIgnoreGroupTitle"> Ignore Group Title</label>
            <input type="checkbox" id="chkAlwaysShowAnswer" value="0" /> <label for="chkAlwaysShowAnswer"> Show Answer</label>
            <input type="checkbox" id="chkRandomQuestion" value="0" /> <label for="chkRandomQuestion">Random question</label>
            <input type="checkbox" id="chkReverseQuestion" value="0" /> <label for="chkReverseQuestion">Reverse questions</label>
          </div>
        </div>        
    </div>
  )
}
export default WFDComponent