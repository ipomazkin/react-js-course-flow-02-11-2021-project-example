import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import * as EmailValidator from 'email-validator';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formScheme = yup.object().shape({
  firstName: yup.string().required("This field is required").min(2, "Name is too short").max(30, "Name is too long"),
  lastName: yup.string().required("This field is required").min(2).max(30),
  phone: yup.number().typeError("It's not a number").required("This field is required").positive().integer(),
  email: yup.string().required("This field is required").email(),
  password: yup.string().required("This field is required").min(6).max(30),
  passwordConfirm: yup.string()
    .required("This field is required")
    .min(6)
    .max(30)
    .oneOf([yup.ref('password')], `Passwords don't match`)
});

export function RegistrationForm() {
  const {register, handleSubmit, formState: {errors}, setValue, watch, reset, resetField, control} = useForm({
    resolver: yupResolver(formScheme),
    defaultValues: {
      firstName: 'Jimmy'
    }
  });

  useEffect(() => {
    setValue('firstName', 'John');
  }, [setValue])

  useEffect(() => {
    return false;

    reset({
      firstName: 'Sally'
    });

    resetField('firstName', {
      defaultValue: 'Bill',
    })
  }, [reset, resetField])

  const passwordValue = watch("password");
  const passwordConfirmValue = watch("passwordConfirm");
  // const isPasswordsMatch = passwordValue === passwordConfirmValue;
  const isPasswordsMatch = true;

  // handleSubmit:
  // 1. передаем в нее F-обработчик: handleSubmit(processSubmit)
  // 2. handleSubmit генерит свою функцию-обработчик и где-то в ней вызывает нашу функцию processSubmit
  // 3. handleSubmit достает значения полей и передает в processSubmit
  // 4. handleSubmit возвращает сгенеренную функцию

  const processSubmit = useCallback((values) => {
    console.log('handleSubmit', values)
  }, []);

  return (
    <form onSubmit={handleSubmit(processSubmit)}>
      <Card sx={{minWidth: 664}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Join Acme
          </Typography>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Get started for free
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid xs={6} item>
                <label>
                  <div>firstName</div>
                  <input type="text" {...register("firstName", {
                    // required: "This field is required",
                    // minLength: {
                    //   value: 2,
                    //   message: 'This name is too short'
                    // },
                    // maxLength: {
                    //   value: 30,
                    //   message: 'This name is too long'
                    // }
                  })} />
                </label>
                {errors.firstName && (
                  <div style={{color: 'red'}}>{errors.firstName.message}</div>
                )}
              </Grid>
              <Grid xs={6} item>
                <label>
                  <div>lastName</div>
                  <input type="text" {...register("lastName", {
                    // required: "This field is required",
                    // minLength: {
                    //   value: 2,
                    //   message: 'This name is too short'
                    // },
                    // maxLength: {
                    //   value: 30,
                    //   message: 'This name is too long'
                    // }
                  })} />
                </label>
                {errors.lastName && (
                  <div style={{color: 'red'}}>{errors.lastName.message}</div>
                )}
              </Grid>

              <Grid xs={6} item>
                <label>
                  <div>phone</div>
                  <input type="text" {...register("phone", {
                    // pattern: {
                    //   value: /^\d+$/gmi,
                    //   message: 'The phone number can contain only digits'
                    // }
                  })} />
                </label>
                  {errors.phone && (
                    <div style={{color: 'red'}}> {errors.phone.message}</div>
                  )}
              </Grid>
              <Grid xs={6} item>
                <label>
                  <div>email</div>
                  <input type="text" {...register("email", {
                    // required: "This field is required",
                    // validate: (value) => {
                    //   if (!EmailValidator.validate(value)) {
                    //     return 'This email has incorrect format.'
                    //   }
                    // },
                  })} />
                </label>
                {errors.email && (
                  <div style={{color: 'red'}}>{errors.email.message}</div>
                )}
              </Grid>

              <Grid xs={6} item>
                <label>
                  <div>password</div>
                  <input type="password" {...register("password", {
                    // required: "This field is required",
                  })} />
                </label>
                {errors.password && (
                  <div style={{color: 'red'}}>{errors.password.message}</div>
                )}
              </Grid>
              <Grid xs={6} item>
                <label>
                  <div>passwordConfirm</div>
                  <input type="password" {...register("passwordConfirm", {
                    // required: "This field is required",
                  })} />
                </label>
                {errors.passwordConfirm && (
                  <div style={{color: 'red'}}>{errors.passwordConfirm.message}</div>
                )}
                {/*{errors.passwordConfirm || !isPasswordsMatch && (*/}
                {/*  <div style={{color: 'red'}}>{*/}
                {/*    !isPasswordsMatch ?*/}
                {/*      `Passwords don't match` :*/}
                {/*      errors.passwordConfirm?.message*/}
                {/*  }</div>*/}
                {/*)}*/}
              </Grid>

              <Grid xs={6} item>
                <label>
                  <div>accept</div>
                  <Controller
                    name="accept"
                    defaultValue={false}
                    control={control}
                    render={(controllerProps) => {
                      return (
                        <button
                          ref={controllerProps.field.ref}
                          onBlur={controllerProps.field.onBlur}
                          onClick={() => {
                            controllerProps.field.onChange(
                              !controllerProps.field.value
                            );
                          }}
                        >{controllerProps.field.value ? '✅' : '❌'}</button>
                      );
                    }}
                  />
                </label>
              </Grid>

            </Grid>
          </Box>
        </CardContent>
        <CardActions>
          <Button disabled={!isPasswordsMatch} type="submit" variant="contained">Join now</Button>
        </CardActions>
      </Card>
    </form>
);
}

RegistrationForm.propTypes =
  {
    onSubmit: PropTypes.func.isRequired,
  }
;
