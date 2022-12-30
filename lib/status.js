import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useStatus() {
    const { data, error, isLoading } = useSWR('/api/status', fetcher);

    return {
        status: data,
        isLoading,
        isError: error
    }
}

export default useStatus;