import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useCatData() {
    const { data, error, isLoading } = useSWR('/api/get', fetcher);

    return {
        status: data,
        isLoading,
        isError: error
    }
}

export default useCatData;