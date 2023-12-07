import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="images/dict.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">To get unique words and meaning
              <br className="hidden lg:inline-block" />stay tuned to this DictApp
            </h1>
            <p className="mb-8 leading-relaxed">Welcome to our Dictionary App, your gateway to a world of words. Our app is your trusted companion for effortlessly exploring the depths of language.</p>
            <div className="flex justify-center">
              <Link to="/start"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start using free</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home