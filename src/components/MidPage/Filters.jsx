import { useState } from 'react'

export function Filters () {
    const [data, setData] = useState(0)

    return (
        <section className='flex items-center justify-center font-2xl right-0.5 text-white space-x-56 mt-6'>
            <div className='flex gap-1'>
            <label>Number of pages:</label>
                <input 
                type='range'
                min='0'
                max='1200'
                step='10'
                value={data}
                onChange={e => setData(e.target.value)}
                 />
                 <span>{data}</span>
            </div>
            <div>
                <label className='justify-items-end'>Filter by genre: </label>
                <select className='text-black'>
                    <option value='Fantasía'>Fantasy</option>
                    <option value='Ciencia ficción'>Fiction</option>
                    <option value='Zombies'>Zombies</option>
                    <option value='Terror'>Terror</option>
                </select>
                
            </div>
        </section>
    )
}
