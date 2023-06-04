import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Field, FieldProps, Form, Formik } from 'formik';
import { ArrowBackIcon } from '@chakra-ui/icons';
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

export default function Signup() {
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <Stack spacing={4} w={'full'} maxW={'md'} rounded={'xl'} boxShadow={'lg'} p={6}>
            <Link as={RouterLink} to="/" color={purpleAccent} fontWeight={600}>
                <ArrowBackIcon boxSize={5} /> Login
            </Link>
            <Heading fontSize={'2xl'}>Sign up</Heading>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values, actions) => {
                    let { data, error } = await supabase.auth.signUp({
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
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}
                            >
                                {/* <Checkbox>Remember me</Checkbox> */}
                            </Stack>
                            <Button
                                bg={purpleAccent}
                                variant={'solid'}
                                colorScheme="purple"
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                Sign up
                            </Button>

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
