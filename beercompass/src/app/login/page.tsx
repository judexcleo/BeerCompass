'use client';
import Login from '../login/components/Login'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Page() {
    return (
        <QueryClientProvider client={queryClient}>
            <Login></Login>
        </QueryClientProvider>
      
    )
}