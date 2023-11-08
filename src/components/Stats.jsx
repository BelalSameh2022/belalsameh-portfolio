import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser';

export default function Stats() {
  return (
    <>
    {stats.map(({no, title}, index) => {
        return (
            <div className="stats__box">
                <h3 className="stats__no">{no}</h3>
                <p className="stats__title">{parse(title)}</p>
            </div>
        );
    })}
    </>
  )
}
