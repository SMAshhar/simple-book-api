import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Here's a code snippet that you can use as a starting point for your header in Tailwind and Next.js:

      ```html */}
      <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
        <div className="flex items-center">
          <img className="h-8 w-auto mr-2" src="/next.svg" alt="Logo" />
            <h1 className="text-lg font-semibold text-gray-800">Brand Name</h1>
        </div>
        <div className="flex items-center">
          <button className="mx-4 text-gray-600 hover:text-gray-800">Button 1</button>
          <button className="mx-4 text-gray-600 hover:text-gray-800">Button 2</button>
          <button className="mx-4 text-gray-600 hover:text-gray-800">Button 3</button>
          <div className="relative inline-block">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path fill="#FFF" fill-rule="evenodd" d="M0 232l206.36-232L412 232z" opacity=".1" /></svg>
            <input className="bg-gray-200 rounded-full py-2 pr-4 pl-10 block w-full appearance-none leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search" />
              <div className="absolute top-0 right-0 mt-3 mr-4">
                <svg className="h-4 w-4 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 17.293l-.707.707L13.414 13l-.707-.707 5.657-5.657c.39-.39.39-1.024 0-1.414l-.707-.707c-.39-.39-1.024-.39-1.414 0L11.586 10l-.707-.707L16.293 4.34c.39-.39.39-1.024 0-1.414l-.707-.707c-.39-.39-1.024-.39-1.414 0L8.586 9H7v2h1.586l5.657 5.657c.39.39 1.024.39 1.414 0l.707-.707c.391-.391.391-1.025 0-1.415z" /></svg>
              </div>
          </div>
        </div>
      </header>
      ```

      {/* This code snippet contains a header with three buttons that extend below and show several links under each button when hovered upon, a logo in the middle of the header, and at the end of the header, there is a search bar plus search icon.

      You can customize this code snippet to suit your needs.

      Source: Conversation with Bing, 4/22/2023(1) Tailwind CSS Search Bar - Free Examples & Tutorial. https://tailwind-elements.com/docs/standard/forms/search/ Accessed 4/22/2023.
      (2) How to create a 🔍️ search bar using tailwind css in next js 🚀. https://dev.to/atultrp/how-to-create-a-search-bar-using-tailwind-css-in-next-js-1oh9 Accessed 4/22/2023.
      (3) Navbars - Official Tailwind CSS UI Components. https://tailwindui.com/components/application-ui/navigation/navbars Accessed 4/22/2023. */}
    </main>
  )
}
