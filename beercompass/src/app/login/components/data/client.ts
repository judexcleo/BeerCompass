'use-client';
import {useMutation} from '@tanstack/react-query'
import {UserDto} from '../../../../../../shared/dtos/user'

    
export const useCreateUser = () => {
    const createUser = async (user: UserDto) => {
        const response = await fetch(`http://localhost:4000/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
    });

    if(!response.ok) {
        throw new Error('There was an error creating the user')
    }
    const createdUser: UserDto = await response.json();
    return createdUser  
}

 return useMutation({
    mutationFn: createUser
 })

}
