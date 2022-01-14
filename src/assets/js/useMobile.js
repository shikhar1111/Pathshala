import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actionTypes} from '../../redux/constants'

const useMobile = props => {
    // const isMobile = useSelector(state => state.common.screen.isMobile)
    // const dispatch = useDispatch()
    // const resizeHandler = () => dispatch({
    //     type: actionTypes.SCREEN_RESIZED,
    //     payload:
    // })
    // useEffect(() => {
    //     resizeHandler()
    // }, [])
    // useEffect(() => {
    //     window.addEventListener('resize', resizeHandler);
    //     return () => window.removeEventListener('resize', resizeHandler);
    // }, [])
    return window.innerWidth < 768
}

export default useMobile