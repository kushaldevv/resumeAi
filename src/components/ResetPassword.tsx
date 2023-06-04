import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Link,
} from '@chakra-ui/react';
let purpleAccent = '#635cfe';

import { supabase } from '../supabaseClient';
import { Field, FieldProps, Form, Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { AuthError } from '@supabase/supabase-js';
import { useState } from 'react';

export default function ResetPassword() {
    const [errorMsg, setErrorMsg] = useState('');
    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'}>
            <Formik
                initialValues={{ password: '' }}
                onSubmit={async (values, actions) => {
                    const { data, error } = await supabase.auth.updateUser({
                        password: values.password,
                    });
                    values.password = '';
                    if (error) {
                        setErrorMsg(error.message);
                    } else {
                        setErrorMsg('Reset!');
                    }
                }}
            >
                {(props) => (
                    <Form>
                        <Stack
                            spacing={4}
                            w={'full'}
                            maxW={'md'}
                            rounded={'xl'}
                            boxShadow={'lg'}
                            p={6}
                            my={12}
                        >
                            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                                Enter new password
                            </Heading>
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
                                <Button
                                    bg={purpleAccent}
                                    variant={'solid'}
                                    colorScheme="purple"
                                    isLoading={props.isSubmitting}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                                <Text
                                    color={errorMsg != 'Reset!' ? 'red.500' : 'green.500'}
                                    fontWeight={600}
                                >
                                    {errorMsg}
                                </Text>
                                <Link
                                    as={RouterLink}
                                    to="/"
                                    color={purpleAccent}
                                    textAlign="center"
                                >
                                    Home
                                </Link>
                            </Stack>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
}
