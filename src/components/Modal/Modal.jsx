import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import styles from './Modal.module.scss'

import { useModalsContext } from '@/hooks/useModalsContext'

export const Modal = ({ modalId = '', children }) => {

    const { overlay, active, dialog, touchTrigger } = styles

    const touchTriggerRef = useRef(null)
    const overlayRef = useRef(null)
    const { modals, dispatch, ACTIONS } = useModalsContext()

    const [isDragged, setIsDragged] = useState(false)
    const [yStart, setYStart] = useState(0)
    const [yEnd, setYEnd] = useState(0)
    const [yDiff, setYDiff] = useState(0)

    const [dialogTransform, setDialogTransform] = useState(0)
    const [overlayOverflow, setOverlayOverflow] = useState('hidden')

    const dialogStyles = {
        transform: modals[modalId] ? `translateY(${dialogTransform}px)` : `translateY(100%)`,
        transition: isDragged ? 'none' : undefined
    }

    const handleClose = () => {
        dispatch({ type: ACTIONS.CLOSE_MODAL, payload: modalId })
        setYDiff(0)
        setYEnd(0)
        setYStart(0)
        setDialogTransform(0)
    }

    const handleStopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleStartDrag = (e) => {
        if (overlayRef.current && overlayRef.current.scrollTop !== 0) {
            return
        }

        if (e.touches && e.touches.length > 0) {

            setOverlayOverflow('hidden')
            setIsDragged(true)

            const startY = e.touches[0].clientY
            setYStart(startY)
        }
    }

    const handleMoveDrag = (e) => {
        if (isDragged && e.touches && e.touches.length > 0) {
            const currentY = e.touches[0].clientY
            const diff = currentY - yStart

            setDialogTransform(diff >= 0 ? diff : 0)
        }
    }

    const handleEndDrag = (e) => {
        if (isDragged && e.changedTouches && e.changedTouches.length > 0) {

            setIsDragged(false)

            const endY = e.changedTouches[0].clientY
            setYEnd(endY)

            const diff = endY - yStart
            setYDiff(diff)

            if (diff <= 100) {
                setDialogTransform(0)
                setOverlayOverflow('auto')
            } else {
                handleClose()
                setOverlayOverflow('hidden')
            }

        }
    }

    useEffect(() => {
        if (modals[modalId]) {
            setTimeout(() => setOverlayOverflow('auto'), 200)
        } else {
            setOverlayOverflow('hidden')
        }
    }, [modals[modalId]])

    return (
        <div
            ref={overlayRef}
            className={classNames(overlay, { [active]: modals[modalId] })}
            data-modalid={modalId}
            onClick={handleClose}

            style={{ overflow: overlayOverflow }}

            onTouchEnd={handleEndDrag}
            // onMouseUp={handleEndDrag}

            onTouchMove={handleMoveDrag}
        // onMouseMove={handleMoveDrag}
        >
            <div
                className={dialog}
                onClick={handleStopPropagation}

                onTouchStart={handleStartDrag}
                style={dialogStyles}
            >

                {/* <div
                    ref={touchTriggerRef}
                    className={touchTrigger}

                    onTouchStart={handleStartDrag}
                    onMouseDown={handleStartDrag}
                ></div> */}

                {children}

            </div>
        </div>
    )
}
