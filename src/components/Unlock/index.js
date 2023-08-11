// Write your code here
import {useState} from 'react'

import {MainContainer, LockImg, Para, LockButton} from './styledComponents'

const Unlock = () => {
  const [lock, setLockValue] = useState(true)
  const onClinkUnLock = () => {
    setLockValue(prevState => !prevState)
  }

  return (
    <MainContainer>
      <LockImg
        src={
          lock
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={lock ? 'lock' : 'unlock'}
      />
      <Para>Your Device is {lock ? 'Locked' : 'Unlocked'}</Para>
      <LockButton onClick={onClinkUnLock}>
        {lock ? 'Unlock' : 'lock'}
      </LockButton>
    </MainContainer>
  )
}

export default Unlock
