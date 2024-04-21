import React, { useState } from 'react'

const ContentUpload = () => {
  return (
    <div style={{ height: '20vh', width: '50vw', marginLeft: '25vw', justifyContent: "space-evenly" }} className='mt-2 inline-block bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
      <h3 className='font-semibold text-white text-2xl text-center'>Upload Art</h3>
      <div style={{ justifyContent: "space-evenly" }} className="flex">
        <textarea style={{ height: '80%' }} placeholder='Description...' className='g-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600  w-4-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="art-description" id="art-description" cols={30} rows={4}></textarea>
        {/* <label htmlFor="upload-input">Select Image</label> */}
        <input className='mt-12 text-white' type="file" name="upload-input" id="upload-input" />
      </div>
    </div>
  )
}

export default ContentUpload
