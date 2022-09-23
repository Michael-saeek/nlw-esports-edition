
export async function useFetchData( url: string): Promise<never[]> {

   
        const response =  await fetch(url)
        const data = response.json()
        return data

  
}
