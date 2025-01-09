import React from 'react'
import classNames from 'classnames'

import { ModalWrapper } from '@/components/ModalWrapper'

import { useModalsContext } from '@/hooks/useModalsContext'

export const UpgradeShip = () => {

    const { data } = useModalsContext()

    return (
        <ModalWrapper
            modalId='upgradeShip'
        >
            {Object.keys(data).length > 0 && (
                <div className={'px-3 pb-5 break-all'}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores neque illum vitae, qui deleniti impedit natus corporis optio, labore debitis officia autem dicta.
                </div>
            )}
        </ModalWrapper>
    )
}
