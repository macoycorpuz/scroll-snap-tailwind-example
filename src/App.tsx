import React from 'react';

class App extends React.Component<{}> {
  render() {
    return (
      <div className="w-full h-full overflow-x-scroll scroll-snap-x flex">
        <section className="bg-gray-700 h-screen w-screen flex-none flex justify-center items-center text-center scroll-snap-start">
          <h1 className="text-green-500 text-4xl lg:text-9xl font-extrabold">
            Page One
          </h1>
        </section>
        <section className="bg-gray-600 h-screen w-screen flex-none flex justify-center items-center text-center scroll-snap-start">
          <h1 className="text-red-500 text-4xl lg:text-9xl font-extrabold">
            Page Two
          </h1>
        </section>
        <section className="bg-gray-500 h-screen w-screen flex-none flex justify-center items-center text-center scroll-snap-start">
          <h1 className="text-yellow-500 text-4xl lg:text-9xl font-extrabold">
            Page Three
          </h1>
        </section>
      </div>
    );
  }
}

export default App;
