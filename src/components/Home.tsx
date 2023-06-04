import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Flex, Stack, Image, Text, Center, Heading } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import '../App.css'
import Navbar from './Navbar';

export default function Home() {
    const [countries, setCountries] = useState<any[]>([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from('countries').select();
        setCountries(data || []);
    }

    return (
        <>
        <Navbar/>
        <Stack align={'center'} minH={'100vh'} bgGradient="linear(to-t, #2d32c1, #9d7def)" p="5">
            <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
                fontFamily={'sans-serif'}
                color="whiteAlpha.900"
            >
                Applying Jobs{' '}
                <Text as={'span'} color={'orange.400'}>
                    made easy
                </Text>
            </Heading>
            {/* <Tilt perspective={2000}> */}
                <Stack id="card" width={'51rem'} height={'66rem'} borderRadius="lg" p="10">
                    {countries.map((country) => (
                        <Text key={country.name}>{country.name}</Text>
                    ))}
                </Stack>
            {/* </Tilt> */}
        </Stack>
        </>
    );
}
