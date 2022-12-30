import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useBowls() {
    const { data, error, isLoading } = useSWR('/api/bowls', fetcher);

    return {
        status: data,
        isLoading,
        isError: error
    }
}

export default useBowls;