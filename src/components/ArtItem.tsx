import { useState } from 'react'


const ArtItem = () => {
    const [fillColor, setFillColor] = useState<string>('none')

    const handleLikes = () => {
        if (fillColor === 'red') {
            setFillColor('none')
        }
        setFillColor('red')
    }
    return (
        <div className='art-item rounded shadow relative'>
            <h3 className='text-white font-semibold text-right pt-2 pr-5'>Emmanuel Ochieng</h3>
            <p className='absolute text-white right-1 pt-2 w-4/12'>This is a potrait of the Mona Lisa with a little African twist and</p>
            <svg style={{ bottom: '1rem', left: '1rem' }} onClick={handleLikes} className="absolute h-8 w-8 text-red-500" viewBox="0 0 24 24" fill={fillColor} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <select id="countries" style={{ bottom: '1rem', right: '1rem' }} className="w-3/12 absolute bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose rating</option>
                <option value={1}>1</option>
                <option value={1.5}>1.5</option>
                <option value={2}>2</option>
                <option value={2.5}>2.5</option>
                <option value={3}>3</option>
                <option value={3.5}>3.5</option>
                <option value={4}>4</option>
                <option value={4.5}>4.5</option>
                <option value={5}>5</option>
            </select>
        </div>
    )
}

export default ArtItem
