// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Styles
import { PageSwitcherWrapper } from './styles';

export const PageSwitcher = (props) => {
    const { styleMode } = useSelector(state => state.general);
    if (props.totalPages > 10) {
        return (
            <PageSwitcherWrapper styleMode={styleMode ? 1 : 0}>
                <NavLink 
                    className={props.page === 1 ? 'active link' : null}
                    to={`/${props.category}/1`}
                >
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
                        <NavLink 
                            className={props.page === 2 ? 'active link' : null}
                            to={`/${props.category}/2`}>
                            2
                        </NavLink>
                        <NavLink 
                            className={props.page === 3 ? 'active link' : null}
                            to={`/${props.category}/3`}>
                            3
                        </NavLink>
                        <NavLink 
                            className={props.page === 4 ? 'active link' : null}
                            to={`/${props.category}/4`}>
                            4
                        </NavLink>
                        <NavLink 
                            className={props.page === 5 ? 'active link' : null}
                            to={`/${props.category}/5`}>
                            5
                        </NavLink>
                        <NavLink 
                            className={props.page === 6 ? 'active link' : null}
                            to={`/${props.category}/6`}>
                            6
                        </NavLink>
                        <NavLink 
                            className={props.page === 7 ? 'active link' : null}
                            to={`/${props.category}/7`}>
                            7
                        </NavLink>
                        <NavLink 
                            className={props.page === 8 ? 'active link' : null}
                            to={`/${props.category}/8`}>
                            8
                        </NavLink>
                        <NavLink 
                            className={props.page === 9 ? 'active link' : null}
                            to={`/${props.category}/9`}>
                            9
                        </NavLink>
                        <NavLink 
                            className={props.page === 10 ? 'active link' : null}
                            to={`/${props.category}/10`}>
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
                        <NavLink 
                            className='active link'
                            to={`/${props.category}/${props.page}`}
                        >
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
                        <NavLink 
                            className={props.page === props.totalPages - 9 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 9}`}
                        >
                            {props.totalPages - 9}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 8 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 8}`}
                        >
                            {props.totalPages - 8}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 7 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 7}`}
                        >
                            {props.totalPages - 7}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 6 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 6}`}
                        >
                            {props.totalPages - 6}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 5 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 5}`}
                        >
                            {props.totalPages - 5}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 4 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 4}`}
                        >
                            {props.totalPages - 4}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 3 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 3}`}
                        >
                            {props.totalPages - 3}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 2 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 2}`}
                        >
                            {props.totalPages - 2}
                        </NavLink>
                        <NavLink 
                            className={props.page === props.totalPages - 1 ? 'active link' : null}
                            to={`/${props.category}/${props.totalPages - 1}`}
                        >
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
                <NavLink 
                    className={props.page === props.totalPages ? 'active link' : null}
                    to={`/${props.category}/${props.totalPages}`}>
                    {props.totalPages}
                </NavLink>
            </PageSwitcherWrapper>
        )
    } else if (props.totalPages > 1) {
        return (
            <PageSwitcherWrapper>
                <NavLink 
                    className={props.page === 1 ? 'active link' : null}
                    to='/compositions/1'
                >
                    1
                </NavLink>
                <NavLink 
                    className={props.page === 2 ? 'active link' : null}
                    to='/compositions/2'
                >
                    2
                </NavLink>
                {props.totalPages > 2 ?
                    <NavLink 
                        className={props.page === 3 ? 'active link' : null}
                        to='/compositions/3'
                    >
                        3
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 3 ?
                    <NavLink 
                        className={props.page === 4 ? 'active link' : null}
                        to='/compositions/4'
                    >
                        4
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 4 ?
                    <NavLink 
                        className={props.page === 5 ? 'active link' : null}
                        to='/compositions/5'
                    >
                        5
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 5 ?
                    <NavLink 
                        className={props.page === 6 ? 'active link' : null}
                        to='/compositions/6'
                    >
                        6
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 6 ?
                    <NavLink 
                        className={props.page === 7 ? 'active link' : null}
                        to='/compositions/7'
                    >
                        7
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 7 ?
                    <NavLink 
                        className={props.page === 8 ? 'active link' : null}
                        to='/compositions/8'
                    >
                        8
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 8 ?
                    <NavLink 
                        className={props.page === 9 ? 'active link' : null}
                        to='/compositions/9'
                    >
                        9
                    </NavLink>
                    :
                    null
                }
                {props.totalPages > 9 ?
                    <NavLink 
                        className={props.page === 10 ? 'active link' : null}
                        to='/compositions/10'
                    >
                        10
                    </NavLink>
                    :
                    null
                }
            </PageSwitcherWrapper>
        )
    }
}
