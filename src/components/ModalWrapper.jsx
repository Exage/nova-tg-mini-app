import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import styles from '@/Core.module.scss'

import { useModals } from '@/lib/modalsStore'

export const ModalWrapper = ({ modalId = '', children }) => {
    const overlayRef = useRef(null)
    const dialogRef = useRef(null)
    const dialogChildrenRef = useRef(null)

    const { modals, closeModal } = useModals()

    const [isDragged, setIsDragged] = useState(false)
    const [yStart, setYStart] = useState(0)

    const [dialogTransform, setDialogTransform] = useState(0)

    const dialogStyles = {
        transform: modals[modalId] ? `translateY(${dialogTransform}px)` : `translateY(100%)`,
        transition: isDragged ? 'none' : undefined,
    }

    const handleClose = () => {
        closeModal(modalId)
        setYStart(0)
        setDialogTransform(0)
    }

    const handleStopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleStartDrag = (e) => {
        if (e.touches && e.touches.length > 0) {
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
            const diff = endY - yStart

            if (diff <= 100) {
                setDialogTransform(0)
            } else {
                handleClose()
            }
        }
    }

    return (
        <div
            ref={overlayRef}
            className={classNames(
                'w-full h-screen flex fixed top-0 left-0 overflow-hidden z-50',
                styles.transitionModal,
                modals[modalId] ? 'visible bg-overlay/70' : 'invisible bg-overlay/0'
            )}
            data-modalid={modalId}
            onClick={handleClose}
            onTouchEnd={handleEndDrag}
            onTouchMove={handleMoveDrag}
        >
            <div
                ref={dialogRef}
                className={classNames(
                    'max-w-app-width w-full pt-5 min-h-96 bg-black-400 mx-auto mt-auto rounded-t-2xl transition-[transform] duration-300 ease-in-out'
                )}
                onClick={handleStopPropagation}
                onTouchStart={handleStartDrag}
                style={dialogStyles}
            >
                <div
                    ref={dialogChildrenRef}
                    className={classNames('max-h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-hidden')}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
