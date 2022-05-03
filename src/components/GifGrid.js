import React/*, { useEffect, useState }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: imgs, loading } = useFetchGifs(category);
    

    return (
        <>
            <h3>{ category }</h3>
            
            { loading && <p>Loadign</p> }

            <div className='card-grid'>
                
                    {
                        imgs.map( image => (
                            <GifGridItem 
                                key = { image.id }
                                {...image}/>
                            ))
                    }
            </div>
        </>
        
    )
}
