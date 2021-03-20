import React, { useState } from 'react';

const List = ({ people }) => {


    return (
        <>
            {people.map((p) => {
                return (
                    <article key={p.id} className="person">
                     <img src={p.image} alt="person image"></img>
                     <div>
                         <h4>{p.name}</h4>
                         <p>{p.age} years</p>
                     </div>
                    </article>
                )
            })}
        </>
    );
};

export default List;
