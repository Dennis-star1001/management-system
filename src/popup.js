const { Box, Flex, FormControl, FormLabel, Input } = require("@chakra-ui/react")

const popup = () => {
  (
    <Box>
      <Flex>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
      </Flex>
    </Box>
  )
}
export default popup;