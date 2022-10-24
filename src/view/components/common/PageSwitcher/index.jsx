// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { PageSwitcherWrapper } from './styles';

export const PageSwitcher = (props) => {
    return (
        <PageSwitcherWrapper>
            <NavLink to={`/${props.category}/1`}>
                1
            </NavLink>
            {props.page > 6 ?
                <span>
                    ...
                </span>
                :
                null
            }
            {props.page <= 6 ?
                <>
                    <NavLink to={`/${props.category}/2`}>
                        2
                    </NavLink>
                    <NavLink to={`/${props.category}/3`}>
                        3
                    </NavLink>
                    <NavLink to={`/${props.category}/4`}>
                        4
                    </NavLink>
                    <NavLink to={`/${props.category}/5`}>
                        5
                    </NavLink>
                    <NavLink to={`/${props.category}/6`}>
                        6
                    </NavLink>
                    <NavLink to={`/${props.category}/7`}>
                        7
                    </NavLink>
                    <NavLink to={`/${props.category}/8`}>
                        8
                    </NavLink>
                    <NavLink to={`/${props.category}/9`}>
                        9
                    </NavLink>
                    <NavLink to={`/${props.category}/10`}>
                        10
                    </NavLink>
                </>
                : 
                null
            }
            {props.page > 6 && props.page < props.totalPages - 5 ?
                <>
                    <NavLink to={`/${props.category}/${props.page - 4}`}>
                        {props.page - 4}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page - 3}`}>
                        {props.page - 3}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page - 2}`}>
                        {props.page - 2}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page - 4}`}>
                        {props.page - 1}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page}`}>
                        {props.page}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page + 1}`}>
                        {props.page + 1}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page + 2}`}>
                        {props.page + 2}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page + 3}`}>
                        {props.page + 3}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.page + 4}`}>
                        {props.page + 4}
                    </NavLink>
                </>
                :
                null
            }
            {props.page >= props.totalPages - 5 ? 
                <>
                    <NavLink to={`/${props.category}/${props.totalPages - 9}`}>
                        {props.totalPages - 9}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 8}`}>
                        {props.totalPages - 8}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 7}`}>
                        {props.totalPages - 7}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 6}`}>
                        {props.totalPages - 6}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 5}`}>
                        {props.totalPages - 5}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 4}`}>
                        {props.totalPages - 4}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 3}`}>
                        {props.totalPages - 3}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 2}`}>
                        {props.totalPages - 2}
                    </NavLink>
                    <NavLink to={`/${props.category}/${props.totalPages - 1}`}>
                        {props.totalPages - 1}
                    </NavLink>
                </>
                :
                null
            }
            {props.page < props.totalPages - 5 ?
                <span>
                    ...
                </span>
                :
                null
            }
            <NavLink to={`/${props.category}/${props.totalPages}`}>
                {props.totalPages}
            </NavLink>
        </PageSwitcherWrapper>
    )
}
