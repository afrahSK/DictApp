import React, { useState } from 'react'

const Start = () => {
  // hooks -  state variables
  const [word, setWord] = useState("Dictionary App");
  const [meaning, setMeaning] = useState("Welcome to our Dictionary App, your gateway to a world of words. Our app is your trusted companion for effortlessly exploring the depths of language. Whether you're a word enthusiast, a student, or a writer, our user-friendly interface makes it a breeze to discover definitions, synonyms, antonyms, and more. With lightning-fast search capabilities and a vast database, you'll always find the information you need. Embrace the joy of language exploration and expand your vocabulary with our dictionary app. Start your linguistic journey right here, right now!");
  const [audio, setAudio] = useState();
  const [meanings, setMeanings] = useState([]);

  //get the meaning of the word
  const getMeaning = async () => {
    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let response = await res.json()
    console.log(response)
    let mainMeaning = response[0]["meanings"][0].definitions[0].definition
    setAudio(response[0]?.phonetics[0]?.audio)
    setMeaning(mainMeaning)
    const meaningsData = response[0].meanings;
    setMeanings(meaningsData);
  };
  // handle change in word search
  const handleChange = (e) => {
    if (e.target.name == "word") {
      setWord(e.target.value);
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {word}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{meaning}</p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                Type a word</label>
              <input onChange={handleChange} type="text" id="full-name" name="word"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div>
              <button onClick={getMeaning}
                className="text-white bg-indigo-500 border-0 py-1 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get meaning</button>
            </div>
            {audio && <div>audio:
              <audio controls>
                <source src={audio} type="audio/ogg" />
              </audio>

            </div>}
          </div>
          {/* extra */}
          <div className="container mx-auto mt-8 flex flex-col items-center">

            {meanings.length > 0 && (
              <div>
                {meanings.map((meaning, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-medium text-gray-900">
                      Part of Speech ({index + 1}): {meaning.partOfSpeech}
                    </h2>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Definitions:</h3>
                      <ul>
                        {meaning.definitions.map((definition, dIndex) => (
                          <li key={dIndex}>{definition.definition}</li>
                        ))}
                      </ul>
                    </div>
                    {meaning.synonyms && (
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Synonyms:</h3>
                        <ul>
                          {meaning.synonyms.map((synonym, sIndex) => (
                            <li key={sIndex}>{synonym}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {meaning.antonyms && (
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Antonyms:</h3>
                        <ul>
                          {meaning.antonyms.map((antonym, aIndex) => (
                            <li key={aIndex}>{antonym}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  )
}

export default Start