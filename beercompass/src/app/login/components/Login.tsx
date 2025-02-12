'use client';
import { Button, Image, Paper, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useCreateUser } from "./data/client";
import { Anchor } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import { CreateUserModal } from "./CreateUserModal";
import { UserDto } from "../../../../../shared/dtos/user";
import { notifications } from "@mantine/notifications";

export default function Login() {

    const { mutate: mutateCreateUser } = useCreateUser();
    const [editOpened, editOpenedHandlers] = useDisclosure(false);

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
                <Button>Log In</Button>
                <Anchor onClick={editOpenedHandlers.open} underline="hover">
                    Create User
                </Anchor>
                <CreateUserModal
                opened={editOpened}
                onUpdate={(createdUser: UserDto) => {
                    mutateCreateUser(createdUser, {
                        onSuccess: () => {
                            notifications.show({
                                title: 'Success!',
                                color: 'green',
                                message: 'New user created!',
                                withBorder: true
                            });
                        },
                        onError: () => {
                            notifications.show({
                                title: 'Error',
                                color: 'red',
                                message: 'There was an error creating your new account',
                                withBorder: true
                            });
                        }
                    });
                    editOpenedHandlers.close();
                }}
                onClose={() => editOpenedHandlers.close()}
                />
            </Stack>
        </Paper>

    )
}