import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps){
  return(
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
        <Text>Fernando Otoni</Text>
        <Text color='gray.300' fontSize='small'>feer.otoni@hotmail.com</Text>
        </Box>
      )}     

      <Avatar size='md' name='Fernando Otoni' src='https://www.github.com/fernandootoni.png'/>
    </Flex>
  )
}