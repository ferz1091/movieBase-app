// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { PageSwitcherWrapper } from './styles';

export const PageSwitcher = (props) => {
    return (
        <PageSwitcherWrapper>
            <NavLink to={`/${props.mode}/1`}>
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
                    <NavLink to={`/${props.mode}/2`}>
                        2
                    </NavLink>
                    <NavLink to={`/${props.mode}/3`}>
                        3
                    </NavLink>
                    <NavLink to={`/${props.mode}/4`}>
                        4
                    </NavLink>
                    <NavLink to={`/${props.mode}/5`}>
                        5
                    </NavLink>
                    <NavLink to={`/${props.mode}/6`}>
                        6
                    </NavLink>
                    <NavLink to={`/${props.mode}/7`}>
                        7
                    </NavLink>
                    <NavLink to={`/${props.mode}/8`}>
                        8
                    </NavLink>
                    <NavLink to={`/${props.mode}/9`}>
                        9
                    </NavLink>
                    <NavLink to={`/${props.mode}/10`}>
                        10
                    </NavLink>
                </>
                : 
                null
            }
            {props.page > 6 && props.page < props.totalPages - 5 ?
                <>
                    <NavLink to={`/${props.mode}/${props.page - 4}`}>
                        {props.page - 4}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page - 3}`}>
                        {props.page - 3}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page - 2}`}>
                        {props.page - 2}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page - 4}`}>
                        {props.page - 1}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page}`}>
                        {props.page}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page + 1}`}>
                        {props.page + 1}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page + 2}`}>
                        {props.page + 2}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page + 3}`}>
                        {props.page + 3}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.page + 4}`}>
                        {props.page + 4}
                    </NavLink>
                </>
                :
                null
            }
            {props.page >= props.totalPages - 5 ? 
                <>
                    <NavLink to={`/${props.mode}/${props.totalPages - 9}`}>
                        {props.totalPages - 9}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 8}`}>
                        {props.totalPages - 8}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 7}`}>
                        {props.totalPages - 7}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 6}`}>
                        {props.totalPages - 6}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 5}`}>
                        {props.totalPages - 5}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 4}`}>
                        {props.totalPages - 4}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 3}`}>
                        {props.totalPages - 3}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 2}`}>
                        {props.totalPages - 2}
                    </NavLink>
                    <NavLink to={`/${props.mode}/${props.totalPages - 1}`}>
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
            <NavLink to={`/${props.mode}/${props.totalPages}`}>
                {props.totalPages}
            </NavLink>
        </PageSwitcherWrapper>
    )
}