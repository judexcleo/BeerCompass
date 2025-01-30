import { Button, Image, Paper, PasswordInput, Stack, TextInput } from "@mantine/core";

export default function Login() {
    return (
        <Paper withBorder>
        <Stack
            style={{ position: 'absolute', left: '40%', top: '25%' }}>
            
                <Image
                    width={150}
                    height={150}
                    src={"/beercompasslogo.png"}>
                </Image>
                <TextInput
                    label="Username"
                    placeholder="Enter your username...">
                </TextInput>
                <PasswordInput
                    label='Password'
                    placeholder="Enter your password...">
                </PasswordInput>
                <Button>Sign In</Button>
        </Stack>
        </Paper>

    )
}