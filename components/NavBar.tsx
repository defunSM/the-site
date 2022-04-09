import {Grid, GridItem} from '@chakra-ui/react'

// TODO: posts, projects, contact page, github
// Use tailwind to spice up the css

function NavBar() {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={1}>
            <GridItem w='100%' h='10' bg='blue.500' /> 
            <GridItem w='100%' h='10' bg='blue.500' /> 
            <GridItem w='100%' h='10' bg='blue.500' /> 
            <GridItem w='100%' h='10' bg='blue.500' /> 
            <ul>
                <li><a href='/posts'>posts</a></li>
                <li><a href='/projects'>projects</a></li>
                <li><a href='/contact'>contact</a></li>
                <li><a href='/github'>github</a></li>
            </ul>

        </Grid>
    )
}

export default NavBar