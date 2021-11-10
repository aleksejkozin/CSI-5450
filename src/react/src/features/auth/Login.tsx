import {Alert, Box, Button, TextField, Typography} from '@mui/material'
import {useMutation} from 'react-query'
import axios from 'axios'
import {API_URL} from '../../services/api'
import {useContext} from 'react'
import assert from 'assert'
import {appContext} from '../../app/AppContext'

export function Login() {
  const [, setState] = useContext(appContext)

  const {
    isLoading,
    mutateAsync: login,
    error,
  } = useMutation(async (user: any) => {
    const response = await axios.post(API_URL + 'signin', user)
    assert(response.data.accessToken, 'Login failed')
    setState(x => ({
      ...x,
      user: response.data,
    }))
  })

  return (
    <Box
      component='form'
      autoComplete='off'
      onSubmit={async (e: any) => {
        e.preventDefault()
        const form: any = Object.fromEntries([
          ...(new FormData(e.target) as any),
        ])
        await login(form)
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <TextField
        disabled={isLoading}
        required
        type='email'
        name='email'
        label='Email'
        margin='normal'
      />
      <TextField
        disabled={isLoading}
        required
        type='password'
        name='password'
        label='Password'
        margin='normal'
      />
      <Button type='submit' variant='contained' disabled={isLoading}>
        Sign In
      </Button>
      {error && (
        <Alert sx={{mt: 1}} severity='error'>
          {`Loin error: ${error}`}
        </Alert>
      )}
    </Box>
  )
}
