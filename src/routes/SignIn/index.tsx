import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { r } from '../../consts/routes';

import { SignInForm, SignInScheme } from './signin.scheme';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { loginFx } from '../../models/auth';
import { CircularProgress, Container } from '@mui/material';
import { get } from 'lodash-es';

const SignIn: FC = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<SignInForm>({
    resolver: yupResolver(SignInScheme),
  });

  const onSubmit = handleSubmit(data => {
    setLoading(true);
    loginFx(data)
      .catch(async err => {
        setError('username', {
          message: get(err, 'message', null),
        });
      })
      .finally(() => setLoading(false));
  });

  if (isLoading)
    return (
      <Container sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
        <CircularProgress />
      </Container>
    );

  return (
    <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            {...register('username')}
            fullWidth
            autoFocus
            label="Username"
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('password')}
            fullWidth
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link variant="body2" component={RouterLink} to={r.register}>
            Does not have an account? Sign up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
