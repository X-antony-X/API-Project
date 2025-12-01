import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({todos}) => {

    return (
            <ul>
                {todos.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                        />
                        <label
                            style={(item.completed) ? { textDecoration: 'line-through' } : null}
                        >{item.title}</label>
                        <FaTrashAlt
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
    )
}

export default Content