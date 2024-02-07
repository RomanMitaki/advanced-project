import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation('NavBar')
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis cupiditate ducimus eaque ipsa ipsum maxime necessitatibus, nisi non nulla, numquam porro quis recusandae sint sit suscipit voluptatem. Ab cupiditate enim eveniet hic nihil nulla. Deleniti dicta dolor fugit illum iusto nobis ratione reiciendis saepe voluptas voluptates. Omnis, repellendus, saepe?
            </Modal>
        </div>
  )
}
