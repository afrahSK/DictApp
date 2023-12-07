import React, { useState } from 'react'
import Axios from 'axios'
const WordDay = () => {
    const [word, setWord] = useState("")
    const [mean, setMean] = useState("")

    // promises=>our whole addRecord function will stop until
    // the request is done and then run the function
    const getRecord = () => {
        Axios.get('http://localhost:3002/getword',).then((response) => {
            // console.log(response);
            const data = response.data[0];
            setWord(data.word);
            setMean(data.mean);
        }).catch((error) => {
            console.error("Axios Error:", error);
        });
    };
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                        alt="hero" src="images/word-of-the-day.jpg" />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {word}</h1>
                        <p className="mb-8 leading-relaxed">{mean}</p>
                        <div className="flex justify-center">
                            <button onClick={getRecord} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Get word</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WordDay