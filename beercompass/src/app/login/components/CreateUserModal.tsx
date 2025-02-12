'use client';
import React from 'react';
import { UserDto } from '../../../../../shared/dtos/user';
import { useForm } from '@mantine/form';
import { Button, Group, Modal, Stack, TextInput, PasswordInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


interface EditFormProps {
    opened: boolean;
    onUpdate: (editedRecord: UserDto) => void;
    onClose: () => void
}


export const CreateUserModal: React.FC<EditFormProps> = (props: EditFormProps) => {
    const { opened, onClose, onUpdate } = props;
    const form = useForm<UserDto>({ initialValues: { username: '', password: '' } })
    const [visible, { toggle }] = useDisclosure(false);
    return (
        <Modal title={'Create a new user profile'} opened={opened} onClose={onClose}>

            <Stack>
                <TextInput label="Username" placeholder='Username...' {...form.getInputProps('username')}></TextInput>
                <PasswordInput label="Password" placeholder='Password...' visible={visible}
                    onVisibilityChange={toggle}{...form.getInputProps('password')}></PasswordInput>
                <Group justify='flex-end'>
                    <Button variant='default' onClick={onClose}>Cancel</Button>
                    <Button
                        onClick={() => {
                            onUpdate(form.values);
                            form.reset();
                        }}>
                        Create User
                    </Button>
                </Group>
            </Stack>
        </Modal>
    )
}