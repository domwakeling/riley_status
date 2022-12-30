import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useTreatments() {
    const { data, error, isLoading } = useSWR('/api/treatments', fetcher);

    return {
        status: data,
        isLoading,
        isError: error
    }
}

export default useTreatments;