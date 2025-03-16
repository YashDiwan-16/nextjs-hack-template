import { RainbowWalletModal } from '@/components/wallet/rainbow-wallet-modal'
import React from 'react'

const TaskLayout = ({ children }:
    { children: React.ReactNode }
) => {
    return (
        <div>
            <RainbowWalletModal />
            {children}
        </div>
    )

}

export default TaskLayout;