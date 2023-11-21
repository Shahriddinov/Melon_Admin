import { Link } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./dropdown.scss";

export function Dropdown({ id, handleDelete, handleEdit, active, pathEdit, pathVideo, pathChat }) {
    // console.log(id);
    return (
        <ul className={active ? 'list' : 'show'}>
            <li>
                <NavLink className={'dropdown-link'} to={pathChat}>Chatni oching</NavLink>
            </li>
            <li onClick={handleEdit}>
                <NavLink className={'dropdown-link'} to={pathEdit}>O'zgartirish</NavLink>
            </li>
            <li onClick={handleDelete}>
                <NavLink className={'dropdown-link drop-link'}>Oʻchirish</NavLink>
            </li>
            <li>
                <NavLink className={'dropdown-link'} to={pathVideo}>Video qo’shish</NavLink>
            </li>
        </ul>
    )
}
