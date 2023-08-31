import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

interface BugButtonProps {
  className?: string
}

// Компонент для тестирования
export const BugButton = ({ className = '' }: BugButtonProps) => {
  const [error, setError] = useState(false)

  const throwE = () => { setError(true) }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
        <Button onClick={throwE} className={classNames('', {}, [className])}>
            throw error
        </Button>
  )
}
