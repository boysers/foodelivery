import React, { PropsWithChildren } from 'react'
import { Link, To } from 'react-router-dom'
import { Button, KeyboardReturnIcon, SxPropsWithTheme } from '@/lib/material-ui'

type FeedbackReturnToHomeProps = PropsWithChildren<{
  sx?: SxPropsWithTheme
  to?: To
}>

export const ReturnToHome: React.FC<FeedbackReturnToHomeProps> = ({
  sx,
  to = '/',
  children = 'Return to the home page'
}) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={sx}
      endIcon={<KeyboardReturnIcon />}
      data-testid="button-home"
    >
      {children}
    </Button>
  )
}
