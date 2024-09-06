import React from 'react';
import pokeball from '../assets/pokeball.svg';

const Loading: React.FC = () => {
    return (
        <div className='h-full z-50 w-full fixed top-0 left-0 bg-black flex items-center justify-center'>
            <div className='h-20 w-20 animate-spin'>
                <img
                    src={pokeball}
                    className='h-full'
                    alt="Pokéball"
                />
            </div>
        </div>
    );
}

export default Loading;
