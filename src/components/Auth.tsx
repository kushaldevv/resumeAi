import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import ResetPassword from './ResetPassword';

import { Flex, Heading, Stack, Image, Text } from '@chakra-ui/react';

export default function Auth(props: { screen: String }) {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                {props.screen === 'login' && <Login />}
                {props.screen === 'forgotpassword' && <ForgotPassword />}
                {props.screen === 'signup' && <Signup />}
                {props.screen === 'resetpassword' && <ResetPassword />}
            </Flex>
            <Stack
                flex={1}
                spacing="8"
                align={'center'}
                justify={'center'}
                bgGradient="linear(to-b, #2d32c1, #9d7def)"
            >
                <Heading fontSize={'2xl'} color="whiteAlpha.900" zIndex={1}>
                    <br />
                    WELCOME TO
                    <br />
                    <br />
                    <br />
                    &nbsp;
                </Heading>
                <Image
                    alt={'Login Image'}
                    src={'src/assets/resume.png'}
                    boxSize="150px"
                    zIndex={1}
                />
                <Heading fontSize={'5xl'} color="whiteAlpha.900" zIndex={1} letterSpacing={'wider'}>
                    RESUMEAI
                </Heading>
                <Text color="whiteAlpha.900" textAlign={'center'} fontWeight="medium">
                    Leave the tedious tasks behind and
                    <br />
                    expedite your job applications with ease
                </Text>
                <Image
                    alt={'Login Image'}
                    src={'src/assets/hexagon.png'}
                    boxSize="375px"
                    pos={'absolute'}
                    zIndex={0}
                    opacity={'0.075'}
                />
                <Image
                    alt={'Login Image'}
                    src={'src/assets/hexagon.png'}
                    boxSize="475px"
                    pos={'absolute'}
                    zIndex={0}
                    opacity={'0.05'}
                />
                <Image
                    alt={'Login Image'}
                    src={'src/assets/hexagon.png'}
                    boxSize="575px"
                    pos={'absolute'}
                    zIndex={0}
                    opacity={'0.025'}
                />
            </Stack>
        </Stack>
    );
}
