import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Field, FieldProps, Form, Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';

import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';
let purpleAccent = '#635cfe';

export default function Login() {
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <Stack spacing={4} w={'full'} maxW={'md'} rounded={'xl'} boxShadow={'lg'} p={6}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values, actions) => {
                    let { data, error } = await supabase.auth.signInWithPassword({
                        email: values.email,
                        password: values.password,
                    });

                    if (error) {
                        setErrorMsg(error.message);
                    }
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="email">
                            {({ field }: FieldProps) => (
                                <FormControl isRequired>
                                    <FormLabel requiredIndicator={<Text></Text>}>
                                        Email address
                                    </FormLabel>
                                    <Input
                                        type="email"
                                        {...field}
                                        focusBorderColor={purpleAccent}
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password">
                            {({ field }: FieldProps) => (
                                <FormControl isRequired>
                                    <FormLabel requiredIndicator={<Text></Text>}>
                                        Password
                                    </FormLabel>
                                    <Input
                                        type="password"
                                        {...field}
                                        focusBorderColor={purpleAccent}
                                    />
                                </FormControl>
                            )}
                        </Field>

                        <Stack spacing={6}>
                            {/* <Checkbox>Remember me</Checkbox> */}
                            <Link pt={1} as={RouterLink} to="/forgot" color={purpleAccent}>
                                Forgot password?
                            </Link>
                            <Button
                                bg={purpleAccent}
                                variant={'solid'}
                                colorScheme="purple"
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                Sign in
                            </Button>
                            <Text textAlign={'center'} color={purpleAccent}>
                                Need an account?&nbsp;
                                <Link as={RouterLink} to="/signup" color={purpleAccent}>
                                    Sign up
                                </Link>
                            </Text>
                            <Text color="red.500" fontWeight={600}>
                                {errorMsg}
                            </Text>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Stack>
    );
}
