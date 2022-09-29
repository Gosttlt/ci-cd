import React, {ReactNode} from 'react'

import s from './s.module.scss'


type TContainer = {
  children: ReactNode
}

const Container: React.FC<TContainer> = ({children}) => {
  return <div className={s.wrapper}>{children}</div>
}

export default Container
