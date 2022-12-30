import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useLitters() {
    const { data, error, isLoading } = useSWR('/api/litters', fetcher);

    return {
        status: data,
        isLoading,
        isError: error
    }
}

export default useLitters;