import { Button, FormControl, Flex, Heading, Input, Stack, Text, Link } from '@chakra-ui/react';
import { supabase } from '../supabaseClient';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

let purpleAccent = '#635cfe';

export default function ForgotPassword() {
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <Flex>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={async (values, actions) => {
                    let { data, error } = await supabase.auth.resetPasswordForEmail(values.email);
                    setErrorMsg('Check your email!');
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
                                Forgot your password?
                            </Heading>
                            <Text fontSize={{ base: 'sm', sm: 'md' }}>
                                You&apos;ll get an email with a reset link
                            </Text>
                            <Field name="email">
                                {({ field }: FieldProps) => (
                                    <FormControl isRequired>
                                        <Input
                                            {...field}
                                            type="email"
                                            focusBorderColor={purpleAccent}
                                            placeholder="your-email@example.com"
                                            _placeholder={{ color: 'gray.500' }}
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
                                    Request Reset
                                </Button>
                                <Link
                                    as={RouterLink}
                                    to="/"
                                    color={purpleAccent}
                                    textAlign="center"
                                >
                                    Login?
                                </Link>
                                <Text color="green.500" fontWeight={600}>
                                    {errorMsg}
                                </Text>
                            </Stack>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
}
