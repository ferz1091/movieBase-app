// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { PageSwitcherWrapper } from './styles';

export const PageSwitcher = (props) => {
    if (props.totalPages > 10) {
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
    } else if (props.totalPages > 1) {
        return (
            <PageSwitcherWrapper>
                <NavLink to='/compositions/1'>
                    1
                </NavLink>
                <NavLink to='/compositions/2'>
                    2
                </NavLink>
                {props.totalPages > 2 ?
                    <NavLink to='/compositions/3'>
                        3
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 3 ?
                    <NavLink to='/compositions/3'>
                        4
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 4 ?
                    <NavLink to='/compositions/3'>
                        5
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 5 ?
                    <NavLink to='/compositions/3'>
                        6
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 6 ?
                    <NavLink to='/compositions/3'>
                        7
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 7 ?
                    <NavLink to='/compositions/3'>
                        8
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 8 ?
                    <NavLink to='/compositions/3'>
                        9
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 9 ?
                    <NavLink to='/compositions/3'>
                        10
                    </NavLink>
                    :
                    null
                }
            </PageSwitcherWrapper>
        )
    }
}
