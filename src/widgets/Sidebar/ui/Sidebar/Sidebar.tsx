import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from '../../../../shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid="sidebar-toggle" onClick={onToggle}>----</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
  )
}
